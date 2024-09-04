import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([])

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    

    useEffect(() => {
        const userId = localStorage.getItem("@USERID:")
        const token = localStorage.getItem("@TOKEN:")
        const loadUser = async () => {
            if(token && userId) {
                try {
                    const {data} = await api.get(`users/${userId}`)
                    setUser(data.name);
                    navigate(location.pathname);

                } catch (error) {
                    console.error(error);
                    
                }
            }
            
        }
        loadUser();
    }, [])

    const loginUser = async (formData) => {
        try {
            const {data} = await api.post("login", formData);
            const token = data?.accessToken;
            const userId = data?.user.id;

            if(token && userId) {
                setUser(data.user.name);
                localStorage.setItem("@TOKEN:", token);
                localStorage.setItem("@USERID:", userId);

                navigate("/landingpage")
            } else {
                throw new Error("Token ou UserId ausentes")
            }
        } catch (error) {
            console.error(error);
            if(error.response?.data === 'Incorrect password' || error.response?.data === 'Password is too short') {
                alert("Credenciais inválidas")
            } else {
                alert("Erro ao fazer login, tente novamente")
            }
            
        }
    }


    const registerUser = async (formData) => {
        try {
            await api.post("users", formData)
            navigate("/loginpage")
        } catch (error) {
            console.error(error);
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN:")
        localStorage.removeItem("@USERID:")
        navigate("/")
    }



    return (
        <UserContext.Provider value={{registerUser, loginUser, user, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)