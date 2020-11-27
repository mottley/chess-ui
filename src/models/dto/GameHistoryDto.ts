import { GameResult } from '../enum';
import { GamePlayersDto } from './GameDto';
import { MoveDto } from './MoveDto';



export interface GameHistoryDto {
  gameId: string
  winner: string
  result: GameResult
  players: GamePlayersDto
  finalBoard: string
  moves: MoveDto[]
}