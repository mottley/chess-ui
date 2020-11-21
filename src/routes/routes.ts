import { Route } from "router5";


export enum RouteNames {
  Base = 'chess',
  Login = 'chess.login',
  Game = 'chess.game',
  Lobby = 'chess.lobby'
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
    path: '/game'
  },
  {
    name: RouteNames.Lobby,
    path: '/lobby'
  }
]