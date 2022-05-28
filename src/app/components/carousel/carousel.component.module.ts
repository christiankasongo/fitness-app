import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselComponentModule {}
