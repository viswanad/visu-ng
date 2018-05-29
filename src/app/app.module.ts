import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpComponent } from './simp/simp.component';
// import our module 
import { HeaderModule } from './modules/header/header.module';
import { HeaderrModule } from './modules/headerr/headerr.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule, // import it into our @NgModule block
    HeaderrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
