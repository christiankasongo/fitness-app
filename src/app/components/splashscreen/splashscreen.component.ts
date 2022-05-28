import { Component, OnInit, Input } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.scss'],
})

export class SplashscreenComponent implements OnInit {

  windowWidth: string;
  splashTransition: string;
  opacityChange = 1;
  showSplash = true;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() animationDuration = 0.5;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() duration = 3;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input() animationType: SplashAnimationType = SplashAnimationType.fadeOut;

ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = '';
      switch (this.animationType) {
        case SplashAnimationType.slideLeft:
          this.windowWidth = '-' + window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;
        case SplashAnimationType.slideRight:
          this.windowWidth = window.innerWidth + 'px';
          transitionStyle = 'left ' + this.animationDuration + 's';
          break;
        case SplashAnimationType.fadeOut:
          transitionStyle = 'opacity ' + this.animationDuration + 's';
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.animationDuration * 1000);
    }, this.duration * 1000);
  }

  displayRandomMessage() {
    // eslint-disable-next-line @typescript-eslint/quotes
    const motivationMessages: string[] = ["The body achieves what the mind believes.",
    // eslint-disable-next-line @typescript-eslint/quotes
    "Once you are exercising regularly, the hardest thing is to stop it",
  // eslint-disable-next-line @typescript-eslint/quotes
  "Your body can stand almost anything. It’s your mind that you have to convince.",
  // eslint-disable-next-line @typescript-eslint/quotes
  "A champion is someone who gets up when they can't"];
  //const random = [Math.floor(Math.random() * motivationMessages.length)];
    return motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
  }
}
