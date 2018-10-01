import {Cat} from "../shared/models/cat.model";
import * as CatActions from './cat.actions';

export interface AppState {
  parents : Cat[];
  kittens : Cat[];
}

const initialState: AppState = {
  kittens : [
    new Cat(2,"Floki","m",new Date(2018,6, 26), "Exotic - Panda", "Floki is a cute kitten with the soul of a viking Warrior", [], ['Wit kinnetje','Floki-pokey'], 'assets/floki_p.jpg' ),
    new Cat(3,"Grizelda","f",new Date(2018,6, 26), "Exotic - Tricolor", "Grizelda is a cute kitty that loves cuddles and purrs so loud it wakes the neighbours up!", [], ['Grijsje'], 'assets/grizelda_p.jpg'),
    new Cat(4,"Minnie","f",new Date(2018,6, 26), "Exotic - Panda", "Minnie is a crazy kitten that looks like Cat-woman and has a severe case of ADHD...", [], ['Maskertje','Rattekopje'],'assets/minnie_p.jpg'),
    new Cat(5,"Puffy","f",new Date(2018,6, 26), "Persian - Tricolor", "First-born and left for 10 hours by her mom, Puffy needs lots of love. But she needs to be approached in the most gentle of ways", [],['Kleintje','Puffster','Puffy-wuffy'], 'assets/puffy_p.jpg'),
    new Cat(6,"Roger","m",new Date(2018,6, 26), "Exotic - Panda", "Roger is te biggest and most powerful of the litter, but also has the softest heart. He loves to talk and has the same fear-tolerance as a horse",[], ['Koetje','Rosee'], 'assets/roger_p.jpg'),
    new Cat(7,"Whisky","f",new Date(2018,6, 26), "Exotic - Tricolor", "Whisky is a playful kitten that loves to be cradled like a baby. She purs very loud", [], [], 'assets/whiskey_p.jpg'),
  ],
  parents : [
    new Cat(0,"Carabas","m",new Date(2012,8, 1), "Exotic/Black", "This is Carabas' short bio" , [], ['Broesje','Kariboes'], 'assets/carabas_p.jpg'),
    new Cat(1,"Chihiro","f",new Date(2014,10, 8), "Exotic/Colour-point", "This is Chihiro's short bio" , [], ['Piro','Piro-miro','truttemie'], 'assets/chihiro_p.jpg'),
    new Cat(2,"Jack","m",new Date(2014,8, 1), "Exotic/Panda", "This is Jack's short bio" , [], ['Jackieboy','Jackie'], 'assets/jack_p.jpg')
  ]

};

export function catReducer(state = initialState, action : CatActions.CatActions){
  switch(action.type){
    case (CatActions.SET_KITTENS) :
      console.log("TRIGGERED");
      console.log(state);
      return {
        ...state, kittens : action.payload
      };
      case (CatActions.SET_PARENTS) :
      return {
        ...state, parents : [...action.payload]
      };
    default : return state;
  }


}
