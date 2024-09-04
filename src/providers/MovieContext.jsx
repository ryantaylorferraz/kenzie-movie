import {  createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

const MovieContext = createContext({})

export const MovieProvider = ({children}) => {
    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const {data} = await api.get("movies")
            setListProduct(data)
        }
        getProducts();
    }, [])

    return (
        <MovieContext.Provider value={{listProduct}}>
        {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => useContext(MovieContext)