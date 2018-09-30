import {Component, OnInit} from "@angular/core";
import {Cat} from "../shared/models/cat.model";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {CatService} from "../services/cat.service";

import * as fromCat from '../store/cat.reducer';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector : "ch-k-navbar",
  templateUrl : "./navbar.component.html",
  styleUrls : ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit{
  kittens : Cat[];
  parents : Cat[];
  faMars = faMars;
  faVenus = faVenus;
  isCollapsed = true;

  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }

  catState : Observable<fromCat.State>

  constructor(private store : Store<fromCat.State>) { }

  ngOnInit() {
    this.catState = this.store.select('cats');
  }

}
