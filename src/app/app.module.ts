import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkWithOmdbApiComponent } from './work-with-omdb-api/work-with-omdb-api.component';

/////////////////////////////////////////////////////////
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
///////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    WorkWithOmdbApiComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
