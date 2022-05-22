import * as Types from "./type";
import axios from "axios";

//register user
export const registerUser = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: Types.USER_REGISTER_REQUEST });
    const { data } = await axios.post("/api/v1/register", myForm);
    // localStorage.setItem("userId", JSON.stringify(data.user._id));
    dispatch({
      type: Types.USER_REGISTER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: Types.USER_REGISTER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};
//login user
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: Types.USER_LOGIN_REQUEST });
    const { data } = await axios.post("/api/v1/login", { email, password });
    localStorage.setItem("userId", JSON.stringify(data.user._id));
    dispatch({
      type: Types.USER_LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: Types.USER_LOGIN_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};
export const userDetails = () => async (dispatch) => {
  try {
    const id = JSON.parse(localStorage.getItem("userId"));
    if (id) {
      dispatch({ type: Types.GET_USER_REQUEST });
      const { data } = await axios.get(`/api/v1/me/${id}`);
      dispatch({
        type: Types.GET_USER_SUCCESS,
        payload: data.user,
      });
    }
  } catch (error) {
    dispatch({
      type: Types.GET_USER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

//Get all users
export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/allUser`);
    dispatch({
      type: Types.GET_ALL_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: Types.GET_ALL_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};
export const logOutUser = () => async (dispatch) => {
  try {
    dispatch({ type: Types.LOGOUT_USER_REQUEST });
    const { data } = await axios.get(`/api/v1/logOut`);
    localStorage.removeItem("userId");
    dispatch({
      type: Types.LOGOUT_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: Types.LOGOUT_USER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

//GET SINGLE USER
export const getSingleUsers = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/getSingleUser/${id}`);
    dispatch({
      type: Types.GET_SINGLE_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: Types.GET_SINGLE_USER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

//SINGLE USER UPDATE
export const updateSingleUsers = (id, formData) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/v1/update/${id}`, formData);
    dispatch({
      type: Types.UPDATE_SINGLE_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: Types.UPDATE_SINGLE_USER_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};
//SINGLE user DElete
export const userDelete = (id) => async (dispatch) => {
  console.log("delete di =", id);
  try {
    const { data } = await axios.delete(`/api/v1/delete/${id}`);
    dispatch({
      type: Types.USER_DELETE_REQUEST,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: Types.USER_DELETE_FAIL,
      payload: error.response.data.errorMessage,
    });
  }
};

//clearError
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: Types.CLEAR_ERRORS });
};
