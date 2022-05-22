import * as Types from "../action/type";
export const userReducer = (
  state = { user: {}, aLLUser: [], singleUser: {} },
  action
) => {
  switch (action.type) {
    case Types.USER_REGISTER_REQUEST:
    case Types.USER_LOGIN_REQUEST:
    case Types.GET_USER_REQUEST:
    case Types.LOGOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        isSingleUser: true,
        isUpdated: false,
      };
    case Types.UPDATE_SINGLE_USER_REQUEST:
      return {
        loading: false,
        isUpdated: false,
      };

    case Types.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        success: action.payload,
      };
    case Types.USER_DELETE_REQUEST:
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: true,
        aLLUser: action.payload,
      };
    case Types.USER_LOGIN_SUCCESS:
    case Types.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case Types.GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,

        singleUser: action.payload,
      };
    case Types.GET_SINGLE_USER_RESET:
      return {
        ...state,
        isSingleUser: false,
      };

    case Types.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        user: action.payload,
      };
    case Types.GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        isSingleUser: true,
        // isUpdated: true, //change
        isAuthenticated: true,
        aLLUser: action.payload,
      };
    case Types.UPDATE_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSingleUser: true,
        isAuthenticated: true,
        isUpdated: true, //change
        aLLUser: action.payload,
      };
    case Types.USER_REGISTER_FAIL:
    case Types.USER_LOGIN_FAIL:
    case Types.GET_USER_FAIL:
    case Types.GET_ALL_FAIL:
    case Types.LOGOUT_USER_FAIL:
    case Types.GET_SINGLE_USER_FAIL:
    case Types.UPDATE_SINGLE_USER_FAIL:
    case Types.USER_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        // isSingleUser: false,
        user: null,
        error: action.payload,
      };
    case Types.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
