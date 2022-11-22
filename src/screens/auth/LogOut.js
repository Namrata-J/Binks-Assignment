import "./auth.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutHandler } from "../../redux/features/authentication/authSlice";

const LogOutPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="b_auth-page login-page">
            <div className="b_auth-card">
                <h4>LogOut</h4>

                <p>Are you sure you wannt to logout?</p>

                <button onClick={() => dispatch(logOutHandler())}>LogOut</button>
                <button onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    );
}

export { LogOutPage };