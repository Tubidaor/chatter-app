import config from '../config'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(user_name, password) {
    return window.btoa(`${user_name}:${password}`)
  },
  saveUserName(userName) {
    window.sessionStorage.setItem(config.user_name, userName)
  },
  getUserName() {
    return window.sessionStorage.getItem(config.user_name)
  },
  clearUserName() {
    window.sessionStorage.removeItem(config.user_name)
  }
}

export default TokenService