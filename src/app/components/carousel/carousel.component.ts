import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import SwiperCore, { Pagination, Navigation, SwiperOptions, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
  @ViewChild('swiper')swiper: SwiperComponent;
    config: SwiperOptions ={
      autoplay:{
        delay: 5000,
        disableOnInteraction: false
      },
      loop:true,
      pagination: true
    };
  }

