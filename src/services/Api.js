import axios from 'axios'
import Cookies from 'js-cookie'

const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

API.interceptors.request.use(({ headers, ...config }) => ({
    ...config,
    headers: {
        ...headers,
        'Content-Type': 'application/json',
        'Authorization': `Bearer  ${headers.Authorization ||  Cookies.get('token')}`,
    },
}));

const handleCatchError = (error) => {
  if (error.response) {
    console.log(error)
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
}

const handleJwt = (response) => {
  if (response.headers.authorization) {
    const jwt = response.headers.authorization.split(" ")[1]
    Cookies.set('token', jwt)
  }
}

export default class APIManager {

  ///////////////////
  ///    USER     ///
  ///////////////////


  // /user or /user/:id ???
  static async getUserInfo(userId) {
    const response =  await API.get(`/user/${userId}`)
    console.log("APIManager # getUserInfo =>", response)
    return response.data
  }
    
  static async signUpUser(email, password) {
    const response = await API.post('/users/sign_up', { email, password });
    console.log("APIManager # signUpUser =>", response)
    return response.data;
  }

  
  static async signInUser(email, password) {
    const response = await API.post("/users/sign_in", { email, password })
    console.log("APIManager # signInUser =>", response)
    return response.data
  }
  
  static async signInUserJwt() {
    const response = await API.post('/users/sign_in')
    handleJwt(response)
    console.log("APIManager # signInUserJwt =>", response)
    return response.data
  }
  
  static async changePasswordRequest(email) {
    const response = await API.post("/users/password", { "user": { email }})
    console.log("APIManager # changePasswordRequest =>", response)
    return response.data
  }
  
  static async changePassword ( reset_password_token, password, password_confirmation ) {
    const response = await API.patch("/users/password", { "user": { reset_password_token, password, password_confirmation } })
    console.log("APIManager # changePassword =>", response)
    return response.data
  }
  
  
  // /users/:id or /user ???
  static async updateUserInfo (userId, userInfoUpdated) {
    const response = await API.put(`/users/${userId}`, userInfoUpdated)
    console.log("APIManager # updateUserInfo =>", response)
    return response.data
  }
  
}