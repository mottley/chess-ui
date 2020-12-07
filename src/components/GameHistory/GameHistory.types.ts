import { GameHistoryVO } from '../../models/GameHistoryVO';


export interface IGameHistoryInput {
  games: GameHistoryVO[]
}

export interface IGameHistoryEvent {
  onViewGame: (game: GameHistoryVO) => void;
}

export type GameHistoryProps = IGameHistoryInput & IGameHistoryEvent