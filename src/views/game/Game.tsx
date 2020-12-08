import React, { FunctionComponent } from 'react';
import { GameProps } from './Game.types';
import { ChessBoard } from '../../components/ChessBoard/ChessBoard';
import { useDispatch, useSelector } from 'react-redux';
import { MoveAction } from '../../redux/actions/GameAction';
import { GameVO } from '../../models/GameVO';
import { IApplicationStore } from '../../redux/store/store.types';
import { PlayerVO } from '../../models/PlayerVO';
import { Box } from '@material-ui/core';
import { MoveSidebar } from '../../components/MoveSidebar/MoveSidebar';
import { TurnIndicator } from '../../components/TurnIndicator/TurnIndicator';
import { GameHistoryVO } from '../../models/GameHistoryVO';
import { useRoute } from 'react-router5';


export const Game: FunctionComponent<GameProps> = () => {

  const dispatch = useDispatch();

  const route = useRoute();
  const gameId = route.route.params.gameId;

  const completedGames = useSelector<IApplicationStore, GameHistoryVO[]>(store => (store.chess.history.completedGames || []))
  const game = useSelector<IApplicationStore, GameVO | undefined>(store => store.chess.game.game)

  const inProgressGame = game && game.gameId === gameId

  const completedGame = completedGames.find(cg => cg.gameId === gameId)
  const player = useSelector<IApplicationStore, PlayerVO>(store => store.chess.auth.player!)

  const onMove = (move: string) => {
    dispatch(new MoveAction({ move }))
  }

  return (
    <React.Fragment>
      {(game || completedGame) &&
        <Box display='flex'>
          <Box>
            <ChessBoard
              game={inProgressGame ? game! : completedGame!}
              player={player}
              onMove={onMove}
            />
          </Box>
          <Box>
            <MoveSidebar
              moves={inProgressGame ? game!.moves : completedGame!.moves}
            />
          </Box>
          {game && inProgressGame &&
            <TurnIndicator
              game={game}
              player={player}
            />}
        </Box>
      }
    </React.Fragment>
  )
}