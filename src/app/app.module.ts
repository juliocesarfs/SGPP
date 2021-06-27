import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurvivorsListComponent } from './survivors/survivors-list/survivors-list.component';
import { SurvivorsFormComponent } from './survivors/survivors-form/survivors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SurvivorsListComponent,
    SurvivorsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
