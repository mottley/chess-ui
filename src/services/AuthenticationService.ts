import axios from 'axios';
import { PlayerDto } from '../models/dto/PlayerDto';
import { CsrfDto } from '../models/dto/CsrfDto';

// TODO - remove
axios.defaults.withCredentials = true

export class AuthenticationService {
  private apiBase = '/api';

  public async register(username: string, password: string): Promise<PlayerDto> {
    const url: string = this.apiBase + '/register';
    return (await axios.post<PlayerDto>(url, { username, password })).data
  }

  public async login(username: string, password: string): Promise<PlayerDto> {
    const url: string = this.apiBase + '/login';
    return (await axios.post<PlayerDto>(url, { username, password })).data
  }

  public async getCsrfToken(): Promise<CsrfDto> {
    const url: string = this.apiBase + '/csrf';
    return (await axios.get<CsrfDto>(url)).data
  }

  public async getPlayer(): Promise<PlayerDto> {
    const url: string = this.apiBase + '/player';
    return (await axios.get<PlayerDto>(url)).data
  }

  public async logout(): Promise<void> {
    const url: string = this.apiBase + '/logout';
    await axios.post(url)
  }
}