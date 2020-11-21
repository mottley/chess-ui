import { Action, Dispatch, Middleware } from 'redux';
import { isPlainObject } from 'lodash';


// export const dtoToGameVO = (dto: GameDto): GameVO => {
//   return {
//     ...dto
//   }
// }

// const convertActionToObject = (action: any): Object => {
//   if (isPlainObject(action))
//     return action

//   return (Object as any).assign({}, action)
// }

export const actionClassMiddleware: Middleware = () => (next: Dispatch) => <A extends Action>(action: A) => {
  console.log('middleware invoked')
  if (isPlainObject(action)) {
    return next(action);
  }
  else {
    console.log('making plain')
    return next((Object as any).assign({}, action))
    // return next(JSON.parse(JSON.stringify(action)))
  }
}
