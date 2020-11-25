import React, { FunctionComponent } from 'react';
import { TurnIndicatorProps } from './TurnIndicator.types';
import { Typography } from '@material-ui/core';
import { Color, GameStatus } from '../../models/enum';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const TurnIndicator: FunctionComponent<TurnIndicatorProps> = props => {

  const getTurnText = (): string => {
    const usernameLookup = {
      [Color.White]: props.game.players.white,
      [Color.Black]: props.game.players.black
    }

    const currentTurnUsername = usernameLookup[props.game.turn]

    return currentTurnUsername === props.player.username ? 'Your turn!' : `It's ${currentTurnUsername}'s turn`
  }

  const getMoveTimerDuration = (): number => {
    const difference = props.game.moveTimer.getTime() - new Date().getTime();
    return Math.floor(Math.abs(difference / 1000));
  }

  return (
    <React.Fragment>
      <Typography>{getTurnText()}</Typography>
      <CountdownCircleTimer
        key={props.game.moves.length}
        isPlaying={props.game.status !== GameStatus.Completed}
        duration={getMoveTimerDuration()}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33]
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </React.Fragment>
  );
}