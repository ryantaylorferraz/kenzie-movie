import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const ReviewContext = createContext({})

export const ReviewProvider = ({children}) => {
    const [movieImg, setMovieImg] = useState(() => {
        return JSON.parse(localStorage.getItem("@movieImg:")) || null
    })
    const handleMovieClick = (image) => {
        setMovieImg(image)
        localStorage.setItem('@movieImg:', JSON.stringify(image));
    };
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/aboutmovie") {
            localStorage.removeItem("@movieImg:");
        }
    }, [location.pathname]);


    return (
        <ReviewContext.Provider value={{movieImg, setMovieImg, handleMovieClick}}>
            {children}
        </ReviewContext.Provider>
    )
}

export const useReviewContext = () => useContext(ReviewContext)