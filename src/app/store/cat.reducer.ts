import {Cat} from "../shared/models/cat.model";
import * as CatActions from './cat.actions';

export interface AppState {
  parents : Cat[];
  kittens : Cat[];
}

const initialState: AppState = {
  kittens : [
    new Cat("Floki","m",new Date(18,6, 26), "Exotic - Panda", "Floki is a cute kitten with the soul of a viking Warrior" ),
    new Cat("Griselda","f",new Date(18,6, 26), "Exotic - Tricolor", "Griselda is a cute kitty that loves cuddles and purrs so loud it wakes the neighbours up!"),
    new Cat("Mini","f",new Date(18,6, 26), "Exotic - Panda", "Mini is a crazy kitten that looks like Cat-woman and has a severe case of ADHD..."),
    new Cat("Puffy","f",new Date(18,6, 26), "Persian - Tricolor", "First-born and left for 10 hours by her mom, Puffy needs lots of love. But she needs to be approached in the most gentle of ways"),
    new Cat("Roger","m",new Date(18,6, 26), "Exotic - Panda", "Roger is a "),
    new Cat("Whiskey","f"),
  ],
  parents : [
    new Cat("Chihiro","f",new Date(14,10, ç), "Exotic/Colour-point", "This is Chihiro's short bio"),
    new Cat("Jack","m",new Date(14,8, 1), "Exotic/Panda", "This is Jack's short bio")
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
