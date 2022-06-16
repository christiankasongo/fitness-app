import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { TestimonialComponent } from './testimonial.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SwiperModule],
  declarations: [TestimonialComponent],
  exports: [TestimonialComponent]
})
export class TestimonialComponentModule {}