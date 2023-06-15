import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NamePageComponent} from './name-page/name-page.component';
import {CountriesComponent} from './countries/countries.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'name', component: NamePageComponent},
  {path: 'countries', component: CountriesComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NamePageComponent,
    CountriesComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
