import { Component, OnInit } from '@angular/core';
import { modal, carousel } from 'materialize-css';
import { Gallery, GalleryItem, GalleryConfig, GalleryDescConfig } from 'ng-gallery';

declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(public gallery: Gallery) {}

  ngOnInit() {
    $('.modal').modal();
    const config: GalleryConfig = {};
    const images: GalleryItem[] = [
      {
        src: './../../assets/images/flatRoof.jpg',
        thumbnail: './../../assets/images/flatRoof.jpg'
      },
      {
        src: 'assets/images/metalRoof.JPG',
        thumbnail: 'assets/images/metalRoof.JPG'
      },
      {
        src: 'assets/images/poolEnclosure.jpg',
        thumbnail: 'assets/images/poolEnclosure.jpg'
      },
    ];

    this.gallery.load(images);
    this.gallery.config.imageSize = '40em';
  }
}
