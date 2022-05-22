import * as Types from "../Store/action/type";
import React, { Fragment, useState, useEffect } from "react";
import "./EditProfile.css";
import { MdOutlineFace } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleUsers,
  updateSingleUsers,
  getAllUsers,
  userDetails,
} from "../Store/action/userAction";

const EditProfile = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isSingleUser, singleUser, isUpdated } = useSelector(
    (state) => state.user
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateSubmit = (e) => {
    e.preventDefault();
    // let myForm = new FormData();
    // myForm.set("name", name);
    // myForm.set("email", email);
    dispatch(updateSingleUsers(id, { name, email }));
  };
  useEffect(() => {
    if (isSingleUser) {
      dispatch(getSingleUsers(id));
      dispatch({ type: Types.GET_SINGLE_USER_RESET });
    }

    if (singleUser) {
      setName(singleUser.name);
      setEmail(singleUser.email);
    }
    if (isUpdated) {
      navigate("/account");
      dispatch(getAllUsers());
      dispatch(userDetails());
    }
  }, [dispatch, isSingleUser, singleUser, id, isUpdated, navigate]);
  return (
    <Fragment>
      <div className="containerEditBox">
        <div className="registerBox">
          <h2>Update profile</h2>
          <form
            className="registerFrom"
            onSubmit={updateSubmit}
            // encType="multipart/form-data"
          >
            <div className="signUpName">
              <MdOutlineFace />
              <input
                value={name}
                type="text"
                name="name"
                required
                placeholder="Enter Name.."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="signUpEmail">
              <AiFillMail />
              <input
                value={email}
                type="text"
                name="email"
                required
                placeholder="Enter email.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="Update" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProfile;
