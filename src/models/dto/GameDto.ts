import { GameStatus, Color } from '../enum';
import { MoveDto } from './MoveDto';


export interface GameDto {
  gameId: string
  status: GameStatus
  turn: Color
  board: string
  players: GamePlayersDto
  moveTimer: string
  moves: MoveDto[]
}

export interface GamePlayersDto {
  white: string
  black: string
}