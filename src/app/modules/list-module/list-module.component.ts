import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {
  @Input() list: object;
  constructor() { }

  ngOnInit() {
  }

}
