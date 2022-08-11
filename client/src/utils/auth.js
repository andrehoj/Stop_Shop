import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return window.localStorage.getItem("Id_Token");
  }

  login(idToken) {
    window.localStorage.setItem("Id_Token", idToken);

    window.location.assign("/home");
  }

  logout() {
    window.localStorage.removeItem("Id_Token");

    window.location.assign("/");
  }
}

export default new AuthService();
