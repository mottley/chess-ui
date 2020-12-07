import { Route } from "router5";


export enum RouteNames {
  Base = 'chess',
  Login = 'chess.login',
  Register = 'chess.register',
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
    name: RouteNames.Register,
    path: '/register',
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