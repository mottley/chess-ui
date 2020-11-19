import { IState } from '../reducers/reducers';

export interface IApplicationStore {
  route: IRouter5State,
  chess: IState
}


interface IRouter5State {
  route: any;
  previousRoute: any;
  transitionRoute: any;
  transitionError: any;
}