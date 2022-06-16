import { CarouselComponent } from './../components/carousel/carousel.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CarouselComponentModule } from '../components/carousel/carousel.component.module';
import { TestimonialComponentModule } from '../components/testimonial/testimonial.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CarouselComponentModule,
    TestimonialComponentModule
  ],
  declarations: [
    Tab1Page
  ]
})
export class Tab1PageModule {}
