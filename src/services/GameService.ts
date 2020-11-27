import axios from 'axios';
import { GameDto } from '../models/dto/GameDto';


export class GameService {

  private apiBase: string = 'http://localhost:8000';

  public async move(gameId: string, move: string) {
    const url: string = this.apiBase + '/game/' + gameId + '/move';
    return (await axios.post<GameDto>(url, { move })).data
  }

  public async getGame(gameId: string) {
    const url: string = this.apiBase + '/game/' + gameId;
    return (await axios.get<GameDto>(url)).data
  }
}