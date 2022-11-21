import { Routes, Route } from "react-router-dom";
import { LogInPage, LogOutPage, UsersListingPage, SingleUserDetailsPage } from "../screens/";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersListingPage />} />
            <Route path="/userDetail" element={<SingleUserDetailsPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/logout" element={<LogOutPage />} />
        </Routes>
    );
}

export { RoutesComp };