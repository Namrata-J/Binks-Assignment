import "./usersListing.css";
import { useEffect } from "react";
import { Header } from "../../components/";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../redux/features/user/userSlice";

const UsersListingPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { usersList, loading, error } = useSelector((store) => store.user);

    useEffect(() => {
        dispatch(getUsersList())
    }, []);

    return (
        <div className="b_users-listing-page">
            <Header />
            <div className="b_users-listing-section">
                <h4>Users List</h4>
                <div className="b_users-list">
                    {
                        loading ?
                            <p className="b_loader">Loading...</p> :
                            error !== "" ?
                                <div className="b_error-state">
                                    <p>{error}</p>
                                    <button onClick={() => dispatch(getUsersList())}>
                                        Retry
                                    </button>
                                </div> :
                                usersList.length > 0 ?
                                    <div className="b_users-listing">
                                        {
                                            usersList.map(
                                                (user) =>
                                                    <div
                                                        className="b_user"
                                                        onClick={() => navigate(`/userDetail/${user?.login?.uuid}`)}
                                                        key={user?.login?.uuid}>
                                                        <p className="b_user-name">{user?.name?.title}. {user?.name?.first} {user?.name?.last}</p>
                                                    </div>
                                            )
                                        }
                                    </div> :
                                    <p className="b_empty-users-list">Users list is empty</p>
                    }
                </div>
            </div>
        </div>
    );
}

export { UsersListingPage };