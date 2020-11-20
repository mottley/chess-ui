import React, { FunctionComponent } from 'react';
import { GameProps } from './Game.types';
import { ChessBoard } from '../../components/ChessBoard/ChessBoard';
import { useDispatch, useSelector } from 'react-redux';
import { MoveAction } from '../../redux/actions/GameAction';
import { GameVO } from '../../models/GameVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { PlayerVO } from '../../models/PlayerVO';


export const Game: FunctionComponent<GameProps> = () => {

  const dispatch = useDispatch();

  const game = useSelector<IApplicationStore, GameVO | undefined>(store => store.chess.game.game)
  const player = useSelector<IApplicationStore, PlayerVO>(store => store.chess.auth.player!)

  const onMove = (move: string) => {
    dispatch(new MoveAction({ move }))
  }

  return (
    <React.Fragment>
      {game &&
        <ChessBoard
          game={game}
          player={player}
          onMove={onMove}
        />}
    </React.Fragment>
  )
}