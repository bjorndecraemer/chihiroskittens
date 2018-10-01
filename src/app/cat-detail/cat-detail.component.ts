import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Cat} from "../shared/models/cat.model";
import {Store} from "@ngrx/store";
import * as fromCat from "../store/cat.reducer";
import {Subscription} from "rxjs";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit, OnDestroy {
  catSubscription : Subscription;
  catId : number;
  cat : Cat;
  faMars = faMars;
  faVenus = faVenus;
  @Input() isParent : boolean;

  constructor( private route : ActivatedRoute,
               private store : Store<fromCat.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe((params)=> {
      this.catId = params['id'];
      this.catSubscription = this.store
        .select('cats')
        .subscribe(
          (catState : fromCat.AppState) => {
            if(this.isParent){
              this.cat = catState.parents[this.catId];
            }
            else{
              this.cat = catState.kittens[this.catId];
            }
          });

    })
  }

  ngOnDestroy(){
    this.catSubscription.unsubscribe();
  }

}
