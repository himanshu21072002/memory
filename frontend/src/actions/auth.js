import * as api from '../api';
import constants from "../constants/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: constants.AUTH, data });
  
      history('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData, history) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: constants.AUTH, data });
  
      history('/');
    } catch (error) {
      console.log(error);
    }
  };
