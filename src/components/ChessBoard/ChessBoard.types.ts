import { GameVO } from '../../models/GameVO';
import { PlayerVO } from '../../models/PlayerVO';


export interface IChessBoardInput {
  game: GameVO
  player?: PlayerVO
}

export interface IChessBoardEvent {
  onMove: (move: string) => void
}

export type ChessBoardProps = IChessBoardInput & IChessBoardEvent