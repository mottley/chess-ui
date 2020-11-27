export enum Color {
  White = 'white',
  Black = 'black'
}

export enum GameStatus {
  Pending = 'pending',
  InProgress = 'in progress',
  Check = 'check',
  Completed = 'completed'
}

export enum GameResult {
  Forfeit = 'forfeit',
  Checkmate = 'checkmate',
  Draw = 'draw',
  Stalemate = 'stalemate',
  ThreefoldRepetition = 'threefold repetition',
  InsufficientMaterial = 'insufficient material'
}