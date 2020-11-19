import axios from 'axios';


axios.defaults.withCredentials = true

export class AuthenticationService {
  private apiBase = 'http://localhost:8000';

  public async register() {

  }

  public async login(username: string, password: string) {
    const url: string = this.apiBase + '/login';
    await axios.post(url, { username, password })
  }
}