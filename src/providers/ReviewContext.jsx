import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const ReviewContext = createContext({})

export const ReviewProvider = ({children}) => {
    const [movieImg, setMovieImg] = useState(() => {
        return JSON.parse(localStorage.getItem("@movieImg:")) || null
    })



    return (
        <ReviewContext.Provider value={{movieImg, setMovieImg}}>
            {children}
        </ReviewContext.Provider>
    )
}

export const useReviewContext = () => useContext(ReviewContext)