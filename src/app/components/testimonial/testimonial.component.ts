import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  SwiperOptions
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialComponent{
  @ViewChild('swiper')swiper: SwiperComponent;
  config: SwiperOptions ={
    autoplay:{
      delay: 7000,
      disableOnInteraction: false
    },
    loop:true,
    pagination : true,
  };
}
