import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeaderboardTable } from '../../components/LeaderboardTable/LeaderboardTable';
import { PlayerRecordVO } from '../../models/PlayerRecordVO';
import { GetLeaderboardAction } from '../../redux/actions/HistoryAction';
import { IApplicationStore } from '../../redux/store/store.types';


export const Leaderboard: FunctionComponent = props => {
  const records = useSelector<IApplicationStore, PlayerRecordVO[] | undefined>(store => store.chess.history.playerRecords)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(new GetLeaderboardAction({}))
  }, [])

  return (
    <LeaderboardTable
      playerRecords={records || []}
    />
  );
}