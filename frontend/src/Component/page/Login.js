import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import { MdOutlineFace } from "react-icons/md";
import { BsUnlock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearErrors } from "../Store/action/userAction";
import { useNavigate, Link } from "react-router-dom";
import { useAlert } from "react-alert";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginEmail, loginPassword));
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/account");
    }
  }, [error, dispatch, alert, isAuthenticated, navigate]);
  return (
    <Fragment>
      <div className="loginContainerBox">
        <div className="loginBox">
          <h2>Login</h2>
          <form className="loginFrom" onSubmit={loginSubmit}>
            <div className="signUpEmail">
              <MdOutlineFace />
              <input
                value={loginEmail}
                type="email"
                placeholder="Enter Email.."
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="signUpPassword">
              <BsUnlock />
              <input
                value={loginPassword}
                type="password"
                placeholder="Enter Password.."
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <Link to="/registration"> register.?</Link>
            <input type="submit" value="Login" className="loginBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
