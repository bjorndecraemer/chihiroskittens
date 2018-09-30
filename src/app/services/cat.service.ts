import {Cat} from "../shared/models/cat.model";

export class CatService{

  kittens : Cat[];
  parents : Cat[];

  constructor(
              ){
    this.kittens = [
      new Cat("Floki","m"),
      new Cat("Griselda","f"),
      new Cat("Mini","f"),
      new Cat("Puffy","f"),
      new Cat("Roger","m"),
      new Cat("Whiskey","f"),
    ];
    this.parents = [
      new Cat("Chihiro","f"),
      new Cat("Jack","m")
    ]
  }

  public getParents() : Cat[]{
    return this.parents;
  }

  public getKittens() : Cat[]{
    return this.kittens;
}
}
