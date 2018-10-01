import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import * as fromCat from "../store/cat.reducer";
import * as CatsActions from '../store/cat.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  catsState : Observable<fromCat.AppState>;

  constructor(private store : Store<fromCat.AppState>) { }

  ngOnInit(){
    this.catsState = this.store.select('cats');
  }

}
