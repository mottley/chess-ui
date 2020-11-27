import { GameHistoryVO } from '../../models/GameHistoryVO';


export interface IGameHistoryInput {
  games: GameHistoryVO[]
}

export interface IGameHistoryEvent { }

export type GameHistoryProps = IGameHistoryInput & IGameHistoryEvent