import { PlayerVO } from './PlayerVO';


export interface RoomVO {
  id: string
  name: string
  gameId?: string
  players: PlayerVO[]
}