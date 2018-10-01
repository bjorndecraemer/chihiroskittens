import {Component, OnChanges, OnDestroy, OnInit} from "@angular/core";
import {Cat} from "../shared/models/cat.model";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";

import * as fromCat from '../store/cat.reducer';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import * as CatsActions from '../store/cat.actions';

@Component({
  selector : "ch-k-navbar",
  templateUrl : "./navbar.component.html",
  styleUrls : ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit{
  catsState : Observable<fromCat.AppState>;
  faMars = faMars;
  faVenus = faVenus;
  isCollapsed = true;
  parents : Cat[];

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private store : Store<fromCat.AppState>) { }

  ngOnInit(){
    this.catsState = this.store.select('cats');
    this.catsState.subscribe((state : fromCat.AppState)=> {
      console.log(state.parents);
      console.log("NEW "+state.kittens);
    })
  }


  onFetchData() {
    this.store.dispatch(new CatsActions.FetchKittens());
    //this.store.dispatch(new CatsActions.FetchParents());
  }

  onSaveData() {
    this.store.dispatch(new CatsActions.StoreParents());
    this.store.dispatch(new CatsActions.StoreKittens());
  }

  ngOnChanges(){
    console.log("Triggered : ");
  }
}
