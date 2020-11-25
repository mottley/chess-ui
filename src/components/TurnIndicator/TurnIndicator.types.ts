import { GameVO } from '../../models/GameVO';
import { PlayerVO } from '../../models/PlayerVO';

export interface TurnIndicatorInput {
  player: PlayerVO
  game: GameVO
}
export interface TurnIndicatorEvent { }

export type TurnIndicatorProps = TurnIndicatorInput & TurnIndicatorEvent
