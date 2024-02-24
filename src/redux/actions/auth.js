import { saveUserData } from "../reducers/auth";
import types from "../types";
import store from '../store';
import { apiPost } from "../../utils/utils";
import { LOGIN_API, SIGNUP_API } from "../../config/urls";
import { clearUserData, storeData } from "../../utils/helperFunctions";

const {dispatch}=store;

export const userLogin = data => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data)
      .then(res => {
        console.log('get res+++', res);
        if (!!res) {
          storeData('userInfo', res)
            .then(value => {
              console.log('im here');
              dispatch(saveUserData(res));
              resolve(res);
            })
            .catch(error => {
              reject(error);
            });
        } else {
          resolve(res);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
  // dispatch(saveUserData(data));
};




  export const userSignup = (data) => {
    console.log("signupdata",data)
    return apiPost(SIGNUP_API, data)
  };
  
  export const fileUpload = (data) => {
    return apiPost(FILE_UPLOAD, data)
  };

export function logout(){
  try {
    clearUserData()
    dispatch({type:types.CLEAR_REDUX_STATE})
    } catch (error) {
       console.log("data is not clear")
    }
}
