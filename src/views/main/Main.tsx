import React, { FunctionComponent } from 'react';
import { MainProps } from './Main.types';
import { useRoute } from 'react-router5';
import { RouteNames } from '../../routes/routes';
import { Login } from '../Login/Login';
import { Game } from '../game/Game';


export const Main: FunctionComponent<MainProps> = props => {
  const route = useRoute();

  switch (route.route.name) {
    case RouteNames.Login:
      return <Login />;
    case RouteNames.Game:
      return <Game />;
    default:
      return <Login />;
  }
}