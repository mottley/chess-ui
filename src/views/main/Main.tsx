import React, { FunctionComponent } from 'react';
import { MainProps } from './Main.types';
import { useRoute } from 'react-router5';
import { RouteNames } from '../../routes/routes';
import { Game } from '../game/Game';
import { Login } from '../login/Login';
import { Lobby } from '../lobby/Lobby';
import { History } from '../history/History';
import { Registration } from '../registration/Registration';

export const Main: FunctionComponent<MainProps> = props => {
  const route = useRoute();

  switch (route.route.name) {
    case RouteNames.Login:
      return <Login />;
    case RouteNames.Game:
      return <Game />;
    case RouteNames.Lobby:
      return <Lobby />;
    case RouteNames.History:
      return <History />;
    case RouteNames.Register:
      return <Registration />;
    default:
      return <Login />;
  }
}