import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpComponent } from './simp/simp.component';
// import our module 
import { HeaderModule } from './modules/header/header.module';
import { ListModuleModule } from './modules/list-module/list-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SimpComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule, // import it into our @NgModule block
    ListModuleModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
