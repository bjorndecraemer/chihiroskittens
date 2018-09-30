import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  catName : string;

  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=> {
      this.catName = params['id'];
    })
  }

}
