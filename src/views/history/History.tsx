import React, { FunctionComponent } from 'react';
import { HistoryProps } from './History.types';
import { GameHistory } from '../../components/GameHistory/GameHistory';
import { useSelector } from 'react-redux';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { IApplicationStore } from '../../redux/store/store.types';

export const History: FunctionComponent<HistoryProps> = props => {

  const games = useSelector<IApplicationStore, GameHistoryVO[] | undefined>(store => store.chess.history.completedGames)

  return (
    <React.Fragment>
      {games &&
        <GameHistory
          games={games}
        />
      }
    </React.Fragment>
  )
}