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
    
  static async registerUser(email, password) {
      const response = await API.post('/auth/register', { email, password });
      return response.data;
  }

  static async fetchPosts(id) {
    const response = await API.get(`/posts/${id}`)
                              .catch(error => handleCatchError(error))
    if(response) return response.data
  }

 
}