import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn259149553Reducer from '../features/SignIn259149553/redux/reducers'
import SignIn259149508Reducer from '../features/SignIn259149508/redux/reducers'
import SignIn259149464Reducer from '../features/SignIn259149464/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn259149553: SignIn259149553Reducer,
SignIn259149508: SignIn259149508Reducer,
SignIn259149464: SignIn259149464Reducer,

});