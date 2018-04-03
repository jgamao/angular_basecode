import { Component, OnInit, OnDestroy } from '@angular/core';

declare var AdminLTE: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  bodyClasses = 'fixed';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];z

  constructor() { }

  ngOnInit() {
    AdminLTE.init();

    // add the the body classes
    this.body.classList.add('fixed');
    this.body.classList.add('skin-green');
  }

  ngOnDestroy() {}

}
