import produce from 'immer';
import { AuthenticationAction, ActionName, LoginSuccessAction } from '../actions/AuthenticationAction'
import { PlayerVO } from '../../models/PlayerVO';


export interface IAuthenticationState {
  player?: PlayerVO
}

const initialAuthenticationState: IAuthenticationState = {
  player: undefined
}

export const authenticationReducer = (state: IAuthenticationState = initialAuthenticationState, action: AuthenticationAction): IAuthenticationState => {
  return produce(state, next => {
    switch (action.type) {
      case (ActionName.LoginSuccess): {
        const loginAction = action as LoginSuccessAction
        next.player = loginAction.payload.player
      }
    }
  })
}