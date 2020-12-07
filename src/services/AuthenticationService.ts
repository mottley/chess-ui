import axios from 'axios';
import { PlayerDto } from '../models/dto/PlayerDto';
import { CsrfDto } from '../models/dto/CsrfDto';

axios.defaults.withCredentials = true

export class AuthenticationService {
  private apiBase = '/api';

  public async register() {

  }

  public async login(username: string, password: string): Promise<PlayerDto> {
    const url: string = this.apiBase + '/login';
    return (await axios.post<PlayerDto>(url, { username, password })).data
  }

  public async getCsrfToken(): Promise<CsrfDto> {
    const url: string = this.apiBase + '/csrf';
    return (await axios.get<CsrfDto>(url)).data
  }
}