import { GameVO } from '../../models/GameVO';
import { PlayerVO } from '../../models/PlayerVO';
import { GameHistoryVO } from '../../models/GameHistoryVO';


export interface IChessBoardInput {
  game: GameVO | GameHistoryVO
  player?: PlayerVO
}

export interface IChessBoardEvent {
  onMove: (move: string) => void
}

export type ChessBoardProps = IChessBoardInput & IChessBoardEvent