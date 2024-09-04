import { Navigate, Outlet } from "react-router-dom"
import { useReviewContext } from "../../providers/ReviewContext"

export const MovieProtected = () => {
    const {movieImg} = useReviewContext()

    return movieImg ? <Outlet /> : <Navigate to="/landingpage" />;
}