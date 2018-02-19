import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { YgreneInfoComponent } from './ygrene-info/ygrene-info.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterCopyrightComponent,
    WelcomeComponent,
    YgreneInfoComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GalleryModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
