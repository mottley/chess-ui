import React, { FunctionComponent } from 'react';
import { HistoryProps } from './History.types';
import { GameHistory } from '../../components/GameHistory/GameHistory';
import { useSelector } from 'react-redux';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { useRouter } from 'react-router5';
import { RouteNames } from '../../routes/routes';

export const History: FunctionComponent<HistoryProps> = props => {

  const games = useSelector<IApplicationStore, GameHistoryVO[] | undefined>(store => store.chess.history.completedGames)
  const router = useRouter();

  const onViewGame = (game: GameHistoryVO) => {
    router.navigate(RouteNames.Game, { gameId: game.gameId })
  }

  return (
    <React.Fragment>
      {games &&
        <GameHistory
          games={games}
          onViewGame={onViewGame}
        />
      }
    </React.Fragment>
  )
}