import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModuleComponent } from './list-module.component';
import { MatListModule, MatIconModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [ListModuleComponent],
  exports: [
    ListModuleComponent // <-- this!
  ]
})
export class ListModuleModule { }
