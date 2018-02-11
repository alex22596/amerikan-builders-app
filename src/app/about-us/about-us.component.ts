import { Component, OnInit } from '@angular/core';
import { scrollFire } from 'materialize-css';

declare var Materialize: any;
declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    var options = [
      {selector: '#asd', offset: 100, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);
  }

}
