 import {Action} from "@ngrx/store";
import {Cat} from "../shared/models/cat.model";

export const SET_PARENTS = 'SET_PARENTS';
export const SET_KITTENS = 'SET_KITTENS';
export const STORE_KITTENS= 'STORE_KITTENS';
export const STORE_PARENTS= 'STORE_PARENTS';
export const FETCH_KITTENS= 'FETCH_KITTENS';
export const FETCH_PARENTS= 'FETCH_PARENTS';

export class SetParents implements Action{
  readonly type = SET_PARENTS;
  constructor(public payload: Cat[]){}
}
export class SetKittens implements Action{
  readonly type = SET_KITTENS;
  constructor(public payload: Cat[]){}
}

 export class StoreKittens implements Action {
   readonly type = STORE_KITTENS;
 }
 export class StoreParents implements Action {
   readonly type = STORE_PARENTS;
 }
 export class FetchParents implements Action {
   readonly type = FETCH_PARENTS;
 }
 export class FetchKittens implements Action {
   readonly type = FETCH_KITTENS;
 }

export type CatActions = SetParents | SetKittens | FetchParents | FetchKittens | StoreKittens | StoreParents;
