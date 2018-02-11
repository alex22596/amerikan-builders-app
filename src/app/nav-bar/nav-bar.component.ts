import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".button-collapse").sideNav();
    
    $("a[href^=\\#").on('click', function() {
      $('html, body').animate({
        scrollTop:$(this.hash).offset().top
      }, 500);
      return false;
    });
  }
}
