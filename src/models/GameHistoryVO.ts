import { MoveVO } from './MoveVO';
import { GamePlayersDto } from './dto/GameDto';
import { GameResult, GameStatus } from './enum';


export interface GameHistoryVO {
  gameId: string
  board: string
  status: GameStatus
  result: GameResult
  moves: MoveVO[]
  players: GamePlayersDto
  winner: string
}