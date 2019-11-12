import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  private interval = 0;
  private countDown: number;

  message: string;

  @Input() time: number;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.countDown = this.time;
    this.interval = window.setInterval(() => {
        this.countDown--;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.message = `Holding at T-${this.countDown} seconds`;
  }

  reset() {
    clearInterval(this.interval);
    this.countDown = this.time;
    this.message = 'Click start button to start the Countdown';
  }
}
