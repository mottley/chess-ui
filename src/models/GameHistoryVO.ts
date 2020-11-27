import { MoveVO } from './MoveVO';
import { GamePlayersDto } from './dto/GameDto';
import { GameResult } from './enum';


export interface GameHistoryVO {
  gameId: string
  board: string
  result: GameResult
  moves: MoveVO[]
  players: GamePlayersDto
  winner: string
}