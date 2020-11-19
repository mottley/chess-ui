import produce from 'immer';
import { AuthenticationAction, ActionName } from '../actions/AuthenticationAction'


export interface IAuthenticationState {
  isAuthenticated: boolean
}

const initialAuthenticationState: IAuthenticationState = {
  isAuthenticated: false
}

export const authenticationReducer = (state: IAuthenticationState = initialAuthenticationState, action: AuthenticationAction) => {
  return produce(state, next => {
    switch (action.type) {
      case (ActionName.Login): {
        // next.isAuthenticated
      }
    }
  })
}