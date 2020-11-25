import { GameStatus, Color } from './enum';
import { GamePlayersDto } from './dto/GameDto';
import { MoveVO } from './MoveVO';

export interface GameVO {
  gameId: string
  status: GameStatus
  turn: Color
  board: string
  players: GamePlayersDto
  moveTimer: Date
  moves: MoveVO[]
}