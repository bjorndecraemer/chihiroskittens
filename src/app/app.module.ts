import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsDropdownModule, CollapseModule} from "ngx-bootstrap";
import {NavbarComponent} from "./navbar/navbar.component";
import { HomeComponent } from './home/home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "./app-routing.module";
import { KittensComponent } from './kittens/kittens.component';
import { ParentsComponent } from './parents/parents.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import {CatService} from "./services/cat.service";
import {StoreModule} from "@ngrx/store";
import {catReducer} from "./store/cat.reducer";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KittensComponent,
    ParentsComponent,
    CatDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,
    StoreModule.forRoot({cats : catReducer})
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
