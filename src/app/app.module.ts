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
import {StoreModule} from "@ngrx/store";
import {catReducer} from "./store/cat.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CatEffects} from "./store/cat.effects";
import {HttpClientModule} from "@angular/common/http";

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
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    FontAwesomeModule,
    StoreModule.forRoot({cats : catReducer}),
    EffectsModule.forRoot([CatEffects])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
