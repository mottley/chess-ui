import React, { FunctionComponent } from 'react';
import { ChessBoardProps } from './ChessBoard.types';
import Chessboard, { Piece } from 'chessboardjsx';

export const ChessBoard: FunctionComponent<ChessBoardProps> = () => {

  const onDrop = (_: { sourceSquare: string, targetSquare: string, piece: Piece }) => {

  }

  return (
    <Chessboard onDrop={onDrop} position='rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2' />
  );
}