import { GameDto } from "./dto/GameDto";
import { GameVO } from "./GameVO";
import { PlayerDto } from "./dto/PlayerDto";
import { PlayerVO } from "./PlayerVO";
import { RoomDto } from './dto/RoomDto';
import { RoomVO } from './RoomVO';




export const dtoToGameVO = (dto: GameDto): GameVO => {
  return {
    ...dto
  }
}

export const dtoToPlayerVO = (dto: PlayerDto): PlayerVO => {
  return {
    ...dto
  }
}

export const dtoToRoomVO = (dto: RoomDto): RoomVO => {
  return {
    ...dto,
    gameId: (dto.gameId || undefined),
    players: dto.players.map(p => dtoToPlayerVO(p))
  }
}