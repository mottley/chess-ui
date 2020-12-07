import axios from 'axios';
import { GameHistoryDto } from '../models/dto/GameHistoryDto';

export class HistoryService {
  private apiBase = '/api';

  public async getGameHistory() {
    const url: string = this.apiBase + '/history';
    return (await axios.get<GameHistoryDto[]>(url)).data
  }
}