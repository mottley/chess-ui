import { GameStatus, Color } from './enum';
import { GamePlayersDto } from './dto/GameDto';

export interface GameVO {
  gameId: string
  status: GameStatus
  turn: Color
  board: string
  players: GamePlayersDto
  moves: string[] // TODO - update
}