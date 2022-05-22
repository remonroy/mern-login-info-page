import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import "./Home.css";
import { BsFillMouseFill } from "react-icons/bs";

const Home = () => {
  return (
    <Fragment>
      <div className="homePage">
        <h1>Welcome Login Information page</h1>
        <Link to="/registration">
          Click Here
          <BsFillMouseFill />
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
