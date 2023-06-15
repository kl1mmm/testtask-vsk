import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Routes, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {NamePageComponent} from './name-page/name-page.component';
import {CountriesComponent} from './countries/countries.component';

const appRoutes: Routes = [
  {path: 'name', component: NamePageComponent},
  {path: 'countries', component: CountriesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NamePageComponent,
    CountriesComponent
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
