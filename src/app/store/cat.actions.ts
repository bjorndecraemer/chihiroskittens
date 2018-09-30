import {Action} from "@ngrx/store";

export const GET_PARENTS = 'GET_PARENTS';
export const GET_KITTENS = 'GET_KITTENS';

export class GetParents implements Action{
  readonly type = GET_PARENTS;
}
export class GetKittens implements Action{
  readonly type = GET_KITTENS;
}

export type CatActions = GetParents | GetKittens;
