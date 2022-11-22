import "./singleUserDetails.css";
import { useEffect } from "react";
import { Header } from "../../components/";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getUserDetail } from "../../redux/features/user/userSlice";

const SingleUserDetailsPage = () => {

    const { userDetail } = useSelector((store) => store.user);
    const { userId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUserDetail({ _id: userId }))
    }, []);

    console.log(userDetail)

    return (
        <div className="b_single-user-listing-page">
            <Header />
            <div className="b_single-user-listing-section">
                <h4>User Details</h4>
                {
                    Object.keys(userDetail).length > 0 ?
                        <div className="b_user-details">
                            <div className="b_user-image-container">
                                <img src={userDetail?.picture?.large} alt="user-image" />
                            </div>
                            <p className="b_user-fullname">Name - {userDetail?.name?.title} {userDetail?.name?.first} {userDetail?.name?.last}</p>
                            <p className="b_user-email">Email - {userDetail?.email}</p>
                        </div> :
                        <div className="b_no-user-details-state">
                            <p>Seems something has went wrong!!</p>
                            <button onClick={() => navigate("/")}>Go Back</button>
                        </div>
                }
            </div>
        </div>
    );
}

export { SingleUserDetailsPage };