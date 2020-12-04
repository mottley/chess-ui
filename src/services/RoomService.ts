import axios from 'axios';
import { RoomDto } from '../models/dto/RoomDto';


export class RoomService {
  private apiBase: string = 'https://localhost:8443';

  async getRooms() {
    const url: string = this.apiBase + '/room';
    return (await axios.get<RoomDto[]>(url)).data
  }

  async createRoom(roomName: string) {
    const url: string = this.apiBase + '/room';
    await axios.post(url, { roomName })
  }

  async joinRoom(roomName: string) {
    const url: string = this.apiBase + '/room/' + roomName;
    await axios.post(url)
  }

}