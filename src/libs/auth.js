import { NAME_TOKEN } from 'constants/index';

const Index = {
  getToken() {
    return localStorage.getItem(NAME_TOKEN) || '';
  },
  removeToken() {
    localStorage.removeItem(NAME_TOKEN);
  },
  setToken(token) {
    localStorage.setItem(NAME_TOKEN, token);
  },
  clearLocalStorage() {
    localStorage.removeItem(NAME_TOKEN);
  },
};

export default Index;
