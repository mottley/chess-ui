import axios from 'axios';
import { PlayerDto } from '../models/dto/PlayerDto';

axios.defaults.withCredentials = true

export class AuthenticationService {
  private apiBase = 'https://localhost:8443';

  public async register() {

  }

  public async login(username: string, password: string): Promise<PlayerDto> {
    const url: string = this.apiBase + '/login';
    return (await axios.post<PlayerDto>(url, { username, password })).data
  }
}