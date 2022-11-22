import "./auth.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logInHandler, resetLogInHelperText } from "../../redux/features/authentication/authSlice";

const LogInPage = () => {

    const [logInCredentials, setLogInCredentials] = useState({ email: "", pwd: "", name: "" });
    const { logInHelperText, isUserLoggedIn } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isUserLoggedIn) {
            location?.state?.from?.pathname ?
                navigate(location?.state?.from?.pathname, { replace: true }) :
                navigate("/", { replace: true })
        }
        // eslint-disable-next-line
    }, [isUserLoggedIn]);

    return (
        <div className="b_auth-page login-page">
            <div className="b_auth-card">
                <h4>LogIn</h4>

                <label htmlFor="b_loginCard-email">Email :</label>
                <input
                    id="b_loginCard-email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={logInCredentials.email}
                    onChange={
                        (e) => {
                            dispatch(resetLogInHelperText())
                            setLogInCredentials(
                                {
                                    ...logInCredentials,
                                    email: e.target.value
                                }
                            )
                        }
                    }
                />

                <label htmlFor="b_loginCard-name">UserName :</label>
                <input
                    id="b_loginCard-name"
                    type="text"
                    placeholder="Name"
                    value={logInCredentials.name}
                    onChange={
                        (e) => {
                            dispatch(resetLogInHelperText())
                            setLogInCredentials(
                                {
                                    ...logInCredentials,
                                    name: e.target.value
                                }
                            )
                        }
                    }
                />

                <label htmlFor="b_loginCard-pwd">Password :</label>
                <input
                    id="b_loginCard-pwd"
                    type="password"
                    placeholder="Password"
                    value={logInCredentials.pwd}
                    onChange={
                        (e) => {
                            dispatch(resetLogInHelperText())
                            setLogInCredentials(
                                {
                                    ...logInCredentials,
                                    pwd: e.target.value
                                }
                            )
                        }
                    }
                />

                <button
                    onClick={
                        () => dispatch(logInHandler(
                            {
                                logInEmail: logInCredentials.email,
                                logInPwd: logInCredentials.pwd,
                                logInUsername: logInCredentials.name
                            }
                        ))
                    }>
                    LogIn
                </button>
            </div>

            <p className="b_helper-text">{logInHelperText}</p>
        </div>
    );
}

export { LogInPage };