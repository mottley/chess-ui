import { Route } from "router5";


export enum RouteNames {
  Base = 'chess',
  Login = 'chess.login',
  Game = 'chess.game',
  Lobby = 'chess.lobby',
  History = 'chess.history'
}

export const routes: Route[] = [
  {
    name: RouteNames.Base,
    path: '/chess'
  },
  {
    name: RouteNames.Login,
    path: '/login'
  },
  {
    name: RouteNames.Game,
    path: '/game/:gameId'
  },
  {
    name: RouteNames.Lobby,
    path: '/lobby'
  },
  {
    name: RouteNames.History,
    path: '/history'
  }
]