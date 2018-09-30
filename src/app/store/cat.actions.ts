import {Action} from "@ngrx/store";
import {Cat} from "../shared/models/cat.model";

export const SET_PARENTS = 'SET_PARENTS';
export const SET_KITTENS = 'SET_KITTENS';

export class SetParents implements Action{
  readonly type = SET_PARENTS;
  constructor(public payload: Cat[]){}
}
export class SetKittens implements Action{
  readonly type = SET_KITTENS;
  constructor(public payload: Cat[]){}
}

export type CatActions = SetParents | SetKittens;
