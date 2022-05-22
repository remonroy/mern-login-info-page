import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers, logOutUser } from "../Store/action/userAction";
import "./UserDetail.css";
import { useDispatch, useSelector } from "react-redux";
import AlluserCard from "./AlluserCard";

const UserDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated, aLLUser, isUpdated, loading } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (isAuthenticated || isUpdated) {
      dispatch(getAllUsers());
    }
  }, [isAuthenticated, dispatch]);
  const handleClick = () => {
    dispatch(logOutUser());
    navigate("/login");
  };
  return (
    <Fragment>
      <div className="userMainDiv">
        <div className="head">
          <h4>{user.name}</h4>
          <button onClick={handleClick}>logOut</button>
        </div>
        <div className="allUserSection">
          <h2>All Users</h2>
          <table className="allUsersTable">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary last-action" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? "loading"
                : aLLUser &&
                  aLLUser.map((data, index) => (
                    <AlluserCard key={data._id} data={data} index={index} />
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDetail;
