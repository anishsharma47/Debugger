export const API_BASE_URL = 'http://223.223.223.116:3000'

export const getApiURL = (endpoint) => API_BASE_URL + endpoint


export const SIGNUP_API = getApiURL('/signup');
export const LOGIN_API = getApiURL('/login');
export const OTP_VERIFY = getApiURL('/otpVerify');