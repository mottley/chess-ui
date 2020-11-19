import { Route } from "router5";


export enum RouteNames {
  Base = 'chess',
  Login = 'chess.login'
}

export const routes: Route[] = [
  {
    name: RouteNames.Base,
    path: '/chess'
  },
  {
    name: RouteNames.Login,
    path: '/login'
  }
]