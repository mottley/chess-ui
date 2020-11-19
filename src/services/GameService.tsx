import axios from 'axios';


export class GameService {

  private apiUrlBase: string = '/api';

  public async move(game: string) {
    const url: string = this.apiUrlBase + '/game/' + game + '/move';
    return (await axios.post(url)).data
  }
}