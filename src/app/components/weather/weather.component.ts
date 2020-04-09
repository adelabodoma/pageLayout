import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor() { }
  public weather;
  public tempType: string = "C";
  public data: any;

  ngOnInit(): void {
    console.log(this.data)


    // check if browser suppert geolocation API
    if (navigator.geolocation && !this.data.selected) {
      navigator.geolocation.getCurrentPosition(position => {

        // Long & Lat
        const { longitude, latitude } = position.coords;

        // FETCH DATA   
        this.fetchData(latitude, longitude);

      }, err => {
        alert(err.message);
      })
    }

    if (this.data.selected && this.data.selected !== 'current' ) {
      // Long & Lat
      const [longitude, latitude ] = this.data.selected.split('-');
      this.fetchData(latitude, longitude);
    }

  }

  fetchData(lat, long) {

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // Test purpose -- https://www.latlong.net/
    /* 
    Russia Location
    lat = 61.524010;
    long = 105.318756;
   
    France Location 
    lat = 46.227638;
    long = 2.213749;
    */
    fetch(`${proxy}https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${lat},${long}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (!data.longitude) {
          return;
        }
        debugger
        this.weather = data;
      })
  }

  tempConvertor(value) {
    let tempDegree = null;

    switch (this.tempType) {
      case 'C': // Convert to Celsius
        tempDegree = (value - 32) / 1.8;
        break;
      case 'F':
        tempDegree = (value * 1.8) + 32;
        break; // Convert to Fahrenheit
      default:
        break
    }
    return tempDegree.toFixed(0);
  }

  // media() {

  //   [...document.querySelectorAll('app-weather')].forEach(com => {
  //     let currentWidth = com.children[1].offsetWidth;
  //     [...com.querySelectorAll('a, h2,h3, span')].forEach(ele => {
  //       let FZ = window.getComputedStyle(ele).fontSize.split('px')[0];
  //       if (currentWidth < 600) {
  //         ele.style.fontSize = +FZ - 10 + 'px';
  //       }

  //     })
  //   })
  // }

}
