import {Injectable, OnDestroy} from "@angular/core";
import {Store} from "@ngrx/store";

import * as fromCats from './cat.reducer';
import * as CatsActions from './cat.actions';


import {HttpClient, HttpRequest} from "@angular/common/http";
import {Actions, Effect} from "@ngrx/effects";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {Cat} from "../shared/models/cat.model";

@Injectable()
export class CatEffects{

  constructor(private actions$ : Actions, private httpClient : HttpClient, private store : Store<fromCats.AppState>){}

  @Effect()
  kittensFetch = this.actions$.ofType(CatsActions.FETCH_KITTENS).pipe(
    switchMap((action : CatsActions.FetchKittens) => {
      return this.httpClient.get<Cat[]>('https://chihiroskittehs.firebaseio.com/kittens.json', {
        observe: 'body',
        responseType: 'json'
      })
    }),
    map(
      (kittens) => {
        return {
           type : CatsActions.SET_KITTENS,
           payload : kittens
        }
      }
    )
  );

  @Effect()
  parentsFetch = this.actions$.ofType(CatsActions.FETCH_PARENTS).pipe(
    switchMap((action : CatsActions.FetchParents) => {
      return this.httpClient.get<Cat[]>('https://chihiroskittehs.firebaseio.com/parents.json', {
        observe: 'body',
        responseType: 'json'
      })
    }),
    map(
      (parents) => {
        return {
          type : CatsActions.SET_PARENTS,
          payload : parents
        }
      }
    )
  );



  @Effect({dispatch : false})
  kittensStore = this.actions$
    .ofType(CatsActions.STORE_KITTENS).pipe(
      withLatestFrom(this.store.select('cats')),
      switchMap(([action, state]) => {
        const req = new HttpRequest('PUT', 'https://chihiroskittehs.firebaseio.com/kittens.json', state.kittens , {reportProgress: true});
        return this.httpClient.request(req);
      })
    )
  @Effect({dispatch : false})
  parentsStore = this.actions$
    .ofType(CatsActions.STORE_PARENTS).pipe(
      withLatestFrom(this.store.select('cats')),
      switchMap(([action, state]) => {
        const req2 = new HttpRequest('PUT', 'https://chihiroskittehs.firebaseio.com/parents.json', state.parents, {reportProgress: true});
        return this.httpClient.request(req2);
      })
    )
}
