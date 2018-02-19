import { Component, OnInit } from '@angular/core';
import { scrollFire } from 'materialize-css';

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'app-ygrene-info',
  templateUrl: './ygrene-info.component.html',
  styleUrls: ['./ygrene-info.component.css']
})
export class YgreneInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = [
      {
        selector: '.ygrene-logo', offset: 200, callback: function(el) {
          Materialize.fadeInImage($(el));
        }
      },
      {
        selector: '.embed-container', offset: 200, callback: function(el) {
          Materialize.fadeInImage($(el));
        }
      }
    ];
    Materialize.scrollFire(options);
  }
}
