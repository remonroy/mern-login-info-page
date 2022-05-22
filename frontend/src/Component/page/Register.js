import React, { Fragment, useEffect, useState } from "react";
import "./Register.css";
import { MdOutlineFace } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { registerUser, clearErrors } from "../Store/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { success, error } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      navigate("/login");
    }
  }, [error, dispatch, success, alert, navigate]);
  return (
    <Fragment>
      <div className="containerBox">
        <div className="registerBox">
          <h2>Register</h2>
          <form className="registerFrom" onSubmit={registerSubmit}>
            <div className="signUpName">
              <MdOutlineFace />
              <input
                value={name}
                type="text"
                name="name"
                placeholder="Enter Name.."
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpEmail">
              <AiFillMail />
              <input
                value={email}
                type="text"
                name="email"
                placeholder="Enter email.."
                onChange={registerDataChange}
              />
            </div>
            <div className="signUpPassword">
              <BiLockAlt />
              <input
                value={password}
                type="password"
                name="password"
                placeholder="Enter password.."
                onChange={registerDataChange}
              />
            </div>
            <Link to="/login"> login.?</Link>
            <input type="submit" value="Register" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
