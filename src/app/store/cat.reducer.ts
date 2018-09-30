import {Cat} from "../shared/models/cat.model";
import * as CatActions from './cat.actions';

export interface AppState {
  parents : Cat[];
  kittens : Cat[];
}

const initialState: AppState = {
  kittens : [
    new Cat("Floki","m"),
    new Cat("Griselda","f"),
    new Cat("Mini","f"),
    new Cat("Puffy","f"),
    new Cat("Roger","m"),
    new Cat("Whiskey","f"),
  ],
  parents : [
    new Cat("Chihiro","f"),
    new Cat("Jack","m")
  ]

};

export function catReducer(state = initialState, action : CatActions.CatActions){
  switch(action.type){
    case (CatActions.SET_KITTENS) :
      return {
        ...state, kittens : [...action.payload]
      };
      case (CatActions.SET_PARENTS) :
      return {
        ...state, parents : [...action.payload]
      };
    default : return state;
  }


}
