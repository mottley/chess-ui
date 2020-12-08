import React, { FunctionComponent, useEffect } from 'react';
import { HistoryProps } from './History.types';
import { GameHistory } from '../../components/GameHistory/GameHistory';
import { useDispatch, useSelector } from 'react-redux';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { useRouter } from 'react-router5';
import { RouteNames } from '../../routes/routes';
import { GetHistoryAction } from '../../redux/actions/HistoryAction';

export const History: FunctionComponent<HistoryProps> = props => {

  const games = useSelector<IApplicationStore, GameHistoryVO[] | undefined>(store => store.chess.history.completedGames)
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(new GetHistoryAction({}))
  }, [])

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