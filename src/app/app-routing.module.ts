import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {KittensComponent} from "./kittens/kittens.component";
import {ParentsComponent} from "./parents/parents.component";
import {CatDetailComponent} from "./cat-detail/cat-detail.component";

const ROUTES = [
  {path: 'kittens', component: KittensComponent},
  {path: 'parents', component: ParentsComponent},
  {path: 'cat/:id', component: CatDetailComponent },
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo : '/home'},

]

@NgModule({
  imports : [RouterModule.forRoot(ROUTES, {enableTracing : true})],
  exports : [RouterModule]
})
export class AppRoutingModule{

}
