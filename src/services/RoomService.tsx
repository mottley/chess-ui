import axios from 'axios';
import { RoomDto } from '../models/dto/RoomDto';


export class RoomService {
  private apiBase: string = 'http://localhost:8000';

  async getRooms() {
    const url: string = this.apiBase + '/room'
    return (await axios.get<RoomDto[]>(url)).data
  }

}