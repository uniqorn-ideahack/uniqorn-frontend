import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API});
    this.service = service;
  }

  signup = (name, surname, email, password,color) => {
    return this.service.post('/auth/register', {name, surname, email, password,color})
    .then(response => {
      this.setUser(response.data)
    return response.data})     
  }

  login = (email, password) => {
    return this.service.post('/auth/login', {email, password})
    .then(response => {
      this.setUser(response.data)
    return response.data})     
  }

  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}
}

export default AuthService;