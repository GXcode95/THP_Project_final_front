import { RepeatOneSharp } from '@mui/icons-material';
import axios from 'axios'
import Cookies from 'js-cookie'

const API = axios.create({ baseURL: process.env.BASE_URL });

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
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # getUserInfo =>", response)
    return response.data
  }
    
  static async signUpUser(email, password) {
    const response = await API.post('/users/sign_up', { email, password })
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # signUpUser =>", response)
    return response.data;
  }

  
  static async signInUser(email, password) {
    const response = await API.post("/users/sign_in", { email, password })
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # signInUser =>", response)
    return response.data
  }
  
  static async signInUserJwt() {
    const response = await API.post('/users/sign_in')
    .catch(error => handleCatchError(error))
    handleJwt(response)
    console.log("APIManager # signInUserJwt =>", response)
    return response.data
  }
  
  static async changePasswordRequest(email) {
    const response = await API.post("/users/password", { "user": { email }})
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # changePasswordRequest =>", response)
    return response.data
  }
  
  static async changePassword ( reset_password_token, password, password_confirmation ) {
    const response = await API.patch("/users/password", { "user": { reset_password_token, password, password_confirmation } })
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # changePassword =>", response)
    return response.data
  }
  
  
  // /users/:id or /user ???
  static async updateUserInfo (userId, userInfoUpdated) {
    const response = await API.put(`/users/${userId}`, userInfoUpdated)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # updateUserInfo =>", response)
    return response.data
  }
  
  ///////////////////
  ///    ADMIN    ///
  ///////////////////

  static async getRentsAdmin() {
    const response = await API.get("/admin/rents/")
    .catch(error => handleCatchError(error))  
    console.log("APIManager # getRentsAdmin =>", response)
    return response.data
  }

  static async getUserAdmin(id) {
    const response = await API.get(`/admin/users/${id}`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # fetchUsersAdmin =>", response)
    return response.data
  }

  static async getUsersAdmin() {
    const response = await API.get(`/admin/users`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # getUserAdmin =>", response)
    return response.data
  }
  
  static async createGameAdmin (gameInfo) {
    const response = await API.post("/admin/games", gameInfo)
    .catch(error => handleCatchError(error))
    console.log("APIManager # createGameAdmin =>", response)
    return response.data
  } 
  
  static async createGameImagesAdmin(gameId, image) {
    const response = await API.post(`/admin/games/${gameId}/images`, image)
    .catch(error => handleCatchError(error))
    console.log("APIManager # createGameImagesAdmin =>", response)
    return response.data
  }

  static async updateGamesAdmin (gameId, gameInfoUpdated) {
    const response = await API.put(`/admin/games/${gameId}`, gameInfoUpdated)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # updateGamesAdmin =>", response)
    return response.data
  }

  static async deleteGameAdmin (gameId) {
    const response = await API.delete(`admin/games/${gameId}`)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # deleteGameAdmin =>", response)
    return response.data
  }

  static async deleteGameImageAdmin (gameId, imageId) {
    const response = await API.delete(`admin/games/${gameId}/images/${imageId}`)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # deleteGameAdmin =>", response)
    return response.data
  }

  //////////////////
  ///    GAME    ///
  //////////////////

  static async getAllGames () {
    const response = await API.get("/games")
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # getAllGames =>", response)
    return response.data
  }

  static async getGame (gameId) {
    const response = await API.get(`/games/${gameId}`)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # getGame =>", response)
    return response.data
  }

  ///////////////////
  ///    ORDER    ///
  ///////////////////

  static async creatOrder (orderInfo) {
    const response = await API.post("/orders", orderInfo)
    .catch(error => handleCatchError(error))
    console.log("APIManager # creatOrder =>", response)
    return response.data
  }

  static async updateOrder (orderId, orderInfoUpdated) {
    const response = await API.patch(`/orders/${orderId}`, orderInfoUpdated)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # updateOrder =>", response)
    return response.data
  }

  static async deleteOrder (orderId) {
    const response = await API.delete(`/orders/${orderId}`)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # deleteOrder =>", response)
    return response.data
  }

  //////////////////
  ///    RENT    ///
  //////////////////

  static async getRents () {
    const response = await API.get("/rents")
    .catch(error => handleCatchError(error))
    console.log("APIManager # getRents =>", response)
    return response.data
  }

  static async createRent (rentInfo) {
    const response = await API.post("/rents", rentInfo)
    .catch(error => handleCatchError(error))
    console.log("APIManager # createRent =>", response)
    return response.data
  }

  static async deleteRent (rentId) {
    const response = await API.delete(`/rents/${rentId}`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # deleteRent =>", response)
    return response.data
  }



  // static async fetchPosts(id) {
  //   const response = await API.get(`/posts/${id}`)
  //                             .catch(error => handleCatchError(error))
  //   if(response) return response.data
  // }
}