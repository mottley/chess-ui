import { PlayerRecordVO } from '../../models/PlayerRecordVO';



export interface ILeaderboardTableInput {
  playerRecords: PlayerRecordVO[]
}

export interface ILeaderboardTableEvent { }

export type LeaderboardTableProps = ILeaderboardTableInput & ILeaderboardTableEvent