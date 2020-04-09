import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  constructor() { }

  ngOnInit(): void {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),
      x = setInterval(() => {

        let now = new Date().getTime(),
          distance = countDown - now;

        this.days = Math.floor(distance / (day)),
          this.hours = Math.floor((distance % (day)) / (hour)),
          this.minutes = Math.floor((distance % (hour)) / (minute)),
          this.seconds = Math.floor((distance % (minute)) / second);
      }, second)
  }

}
