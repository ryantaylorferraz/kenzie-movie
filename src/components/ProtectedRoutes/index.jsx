import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../../providers/UserContext"

export const ProtectedRouter = () => {
    const {user} = useUserContext()
    return user ? <Outlet /> : <Navigate to="/" />;
}