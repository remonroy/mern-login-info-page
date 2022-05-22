import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/page/Home";
import Register from "./Component/page/Register";
import PrivetRoute from "./Component/Route/PrivetRoute";
import Login from "./Component/page/Login";
import { userDetails } from "./Component/Store/action/userAction";
import store from "./Component/Store/index";
import UserDetail from "./Component/page/UserDetail";
import EditProfile from "./Component/page/EditProfile";

function App() {
  useEffect(() => {
    store.dispatch(userDetails());
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={
              <PrivetRoute>
                <UserDetail />
              </PrivetRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivetRoute>
                <EditProfile />
              </PrivetRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
