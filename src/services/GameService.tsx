import axios from 'axios';


export class GameService {

  private apiBase: string = 'http://localhost:8000';

  public async move(game: string, move: string) {
    const url: string = this.apiBase + '/game/' + game + '/move';
    return (await axios.post(url, { move })).data
  }
}