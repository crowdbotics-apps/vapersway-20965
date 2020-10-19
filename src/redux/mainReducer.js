import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn259149508Reducer from '../features/SignIn259149508/redux/reducers'
import SignIn259149464Reducer from '../features/SignIn259149464/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn259149508: SignIn259149508Reducer,
SignIn259149464: SignIn259149464Reducer,

});