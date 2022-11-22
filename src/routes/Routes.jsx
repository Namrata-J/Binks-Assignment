import { RequiresAuth } from "../components/";
import { Routes, Route } from "react-router-dom";
import { LogInPage, LogOutPage, UsersListingPage, SingleUserDetailsPage } from "../screens/";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path="/" element={<RequiresAuth><UsersListingPage /></RequiresAuth>} />
            <Route path="/userDetail" element={<RequiresAuth><SingleUserDetailsPage /></RequiresAuth>} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/logout" element={<RequiresAuth><LogOutPage /></RequiresAuth>} />
        </Routes>
    );
}

export { RoutesComp };