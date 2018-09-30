import {Component, OnInit} from "@angular/core";
import {Cat} from "../shared/models/cat.model";
import {faMars, faVenus} from "@fortawesome/free-solid-svg-icons";
import {CatService} from "../services/cat.service";

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

  constructor(private catService : CatService){}

  ngOnInit(){
    //this.kittens = this.catService.getKittens();
    //this.parents = this.catService.getParents();
  }
  toggleCollapsed(){
    this.isCollapsed = !this.isCollapsed;
  }
}
