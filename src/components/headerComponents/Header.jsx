import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
            <h4 className="b_header-logo-text">
                Frontend Application
            </h4>
            <button
                className="b_header-logout-btn"
                onClick={() => navigate("/logout")}>
                LogOut
            </button>
        </header>
    );
}

export { Header };