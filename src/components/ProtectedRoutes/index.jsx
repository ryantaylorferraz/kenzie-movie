import { Navigate, Outlet } from "react-router-dom"
import { useUserContext } from "../../providers/UserContext"
import { useReviewContext } from "../../providers/ReviewContext"

export const ProtectedRouter = () => {
    const {user} = useUserContext()
    const {movieImg} = useReviewContext()

    
    return user ? <Outlet /> : <Navigate to="/landingpage" />;
}