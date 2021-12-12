import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = process.env.REACT_APP_BASE_URL
const API = axios.create({ baseURL: BASE_URL});
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
    console.log("jwt :", jwt)
    Cookies.set('token', jwt)
  }
}

export default class APIManager {

  ///////////////////
  ///    USER     ///
  ///////////////////


  // /user or /user/:id ???
  static async getUserInfo(userId) {
    const response =  await API.get(`/users/${userId}`)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # getUserInfo =>", response)
    return response.data
  }

  static async signOutUser() {
    const response = await API.delete("/users/sign_out")
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # signOutUser =>", response)
    return response.data
  }
    
  static async registerUser(user) {
    const response = await API.post('/users', {"user": user})
    .catch(error => handleCatchError(error)) 
    handleJwt(response)
    console.log("APIManager # signUpUser =>", response)
    return response.data;
  }
  
  static async signInUser(email, password) {
    const response = await axios.post(`${BASE_URL}/users/sign_in`,
      {
        "user": {
          email,
          password }
      })
      .catch(error => handleCatchError(error)) 
    handleJwt(response)
    console.log("jwtCookie: ", Cookies.get('token'))
    console.log("APIManager # signInUser =>", response)
    return response.data
  }
  
  static async signInUserJwt() {
    const response = await axios.post(`${BASE_URL}/users/sign_in`,null,{
      headers: { 'Authorization': `Bearer ${Cookies.get('token')}` }
    })
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
  
  static async createGameAdmin (gameInfo, gameImages) {
    const response = await API.post("/admin/games", {game: gameInfo, images: gameImages })
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
    
    // render a games array of object with and images props,
    // wich is an array of string containing the images public_id on cloudinary
    const formatedResponse = []
      if (response.data.error){
        formatedResponse = response.data.error
      } else {
        response.data.forEach( game => formatedResponse.push({...game.info, images: response.images}) )
      }        

    return formatedResponse
  }

  static async getGame (gameId) {
    const response = await API.get(`/games/${gameId}`)
    .catch(error => handleCatchError(error)) 
    console.log("APIManager # getGame =>", response)

    const formatedResponse = response.data.error ? response.data.error : {...response.data.info, images: response.data.images}
    
    return formatedResponse
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

  static async updateRent (rentId, rentQuantity) {
    const response = await API.put(`/rents/${rentId}`, rentQuantity)
    .catch(error => handleCatchError(error))
    console.log("APIManager # updateRent =>", response)
    return response.data
  }

  static async deleteRent (rentId) {
    const response = await API.delete(`/rents/${rentId}`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # deleteRent =>", response)
    return response.data
  }

  //////////////////
  ///    CART    ///
  //////////////////

  static async getCart (id) {
    const response = await API.get(`/carts/${id}`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # getCart =>", response)
    return response.data
  }

  //////////////////////
  ///    PACKAGES    ///
  //////////////////////

  static async getAllPackages () {
    const response = await API.get(`/packages`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # getAllPackages =>", response)
    return response.data
  }

  static async getCartsHistory (id) {
    const response = await API.get(`/carts`)
    .catch(error => handleCatchError(error))
    console.log("APIManager # getCartsHistory =>", response)
    return response.data
  }

  static async buyPackage (token, id, quantity) {
    const response = await API.post('/charges', {token, package: {
      presence: true,
      package_id: id,
      quantity: quantity
    }}).catch(error => handleCatchError(error))
    
    console.log("APIManager # BuyPackages =>", response)
    return response.data
  }
  
}