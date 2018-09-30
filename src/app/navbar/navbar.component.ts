import {Component, OnDestroy, OnInit} from "@angular/core";
import {Cat} from "../shared/models/cat.model";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {CatService} from "../services/cat.service";

import * as fromCat from '../store/cat.reducer';
import {Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";

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
  kittens : Cat[];
  parents : Cat[];

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }



  constructor(private store : Store<fromCat.AppState>) { }

  ngOnInit(){
    this.catsState = this.store.select('cats');
  }

}
