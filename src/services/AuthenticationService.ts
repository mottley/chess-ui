import axios from 'axios';
import { PlayerDto } from '../models/dto/PlayerDto';

axios.defaults.withCredentials = true

export class AuthenticationService {
  private apiBase = 'http://localhost:8000';

  public async register() {

  }

  public async login(username: string, password: string): Promise<PlayerDto> {
    const url: string = this.apiBase + '/login';
    return (await axios.post<PlayerDto>(url, { username, password })).data
  }
}