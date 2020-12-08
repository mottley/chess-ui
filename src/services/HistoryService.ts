import axios from 'axios';
import { GameHistoryDto } from '../models/dto/GameHistoryDto';
import { PlayerRecordDto } from '../models/dto/PlayerRecordDto';

export class HistoryService {
  private apiBase = '/api';

  public async getGameHistory() {
    const url: string = this.apiBase + '/history';
    return (await axios.get<GameHistoryDto[]>(url)).data
  }

  public async getLeaderbaord() {
    const url: string = this.apiBase + '/leaderboard';
    return (await axios.get<PlayerRecordDto[]>(url)).data
  }
}