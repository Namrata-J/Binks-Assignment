import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiresAuth = ({ children }) => {

    const location = useLocation();
    const { isUserLoggedIn } = useSelector((store) => store.auth);

    return isUserLoggedIn ?
        children :
        <Navigate to="/login" state={{ from: location }} replace />
}

export { RequiresAuth };