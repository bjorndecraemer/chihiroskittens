import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {KittensComponent} from "./kittens/kittens.component";
import {ParentsComponent} from "./parents/parents.component";
import {CatDetailComponent} from "./cat-detail/cat-detail.component";

const ROUTES = [
  {path: 'kittens/:id', component: KittensComponent},
  {path: 'parents/:id', component: ParentsComponent},
  {path: 'cat/:id', component: CatDetailComponent },
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo : '/home'},

]

@NgModule({
  imports : [RouterModule.forRoot(ROUTES)],
  exports : [RouterModule]
})
export class AppRoutingModule{

}
