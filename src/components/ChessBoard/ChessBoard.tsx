import React, { FunctionComponent } from 'react';
import { ChessBoardProps } from './ChessBoard.types';
import Chessboard, { Piece } from 'chessboardjsx';
import { Square } from 'chess.js';
import { Color } from '../../models/enum';
const Chess = require('chess.js');


export const ChessBoard: FunctionComponent<ChessBoardProps> = props => {

  const onDrop = (move: { sourceSquare: Square, targetSquare: Square, piece: Piece }) => {
    // Convert to SAN move
    const chess = new Chess(props.game.board);

    // TODO - later check if null (client side validation)
    const result = chess.move({ from: move.sourceSquare, to: move.targetSquare })

    if (result !== null) {
      const moves = chess.history()
      props.onMove(moves[0])
    }
  }

  const determineOrientation = () => {

    if (!props.player) {
      return Color.White
    }

    const usernameLookup = {
      [props.game.players.white]: Color.White,
      [props.game.players.black]: Color.Black
    }

    return usernameLookup[props.player.username]
  }

  return (
    <Chessboard
      position={props.game.board}
      onDrop={onDrop}
      orientation={determineOrientation()}
    />
  );
}