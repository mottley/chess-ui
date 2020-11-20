import { GameDto } from "./dto/GameDto";
import { GameVO } from "./GameVO";
import { PlayerDto } from "./dto/PlayerDto";
import { PlayerVO } from "./PlayerVO";





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