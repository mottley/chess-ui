import { GameStatus, Color } from '../enum';


export interface GameDto {
  gameId: string
  status: GameStatus
  turn: Color
  board: string
  players: GamePlayersDto
  moveTimer: Date
  moves: string[] // TODO - update
}

export interface GamePlayersDto {
  white: string
  black: string
}