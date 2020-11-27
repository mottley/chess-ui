import { GameDto } from "./dto/GameDto";
import { GameVO } from "./GameVO";
import { PlayerDto } from "./dto/PlayerDto";
import { PlayerVO } from "./PlayerVO";
import { RoomDto } from './dto/RoomDto';
import { RoomVO } from './RoomVO';
import { MoveDto } from './dto/MoveDto';
import { MoveVO } from './MoveVO';
import { GameHistoryVO } from './GameHistoryVO';
import { GameHistoryDto } from './dto/GameHistoryDto';

export const dtoToGameVO = (dto: GameDto): GameVO => {
  return {
    ...dto,
    moveTimer: new Date(dto.moveTimer),
    moves: dto.moves
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
      .map((m, idx) => dtoToMoveVO(m, idx + 1))
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

export const dtoToMoveVO = (dto: MoveDto, number: number): MoveVO => {
  return {
    ...dto,
    time: new Date(dto.time),
    number: number
  }
}

export const dtoToHistoryVO = (dto: GameHistoryDto): GameHistoryVO => {
  return {
    ...dto,
    board: dto.finalBoard,
    moves: dto.moves
      .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
      .map((m, idx) => dtoToMoveVO(m, idx + 1))
  }
}