import { PlayerDto } from './PlayerDto';

export interface RoomDto {
  id: string
  name: string
  gameId: string | null
  players: PlayerDto[]
}