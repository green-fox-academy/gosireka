import { Component, OnInit, Input } from '@angular/core';
import { CITIES } from '../cities';
import { City } from '../city';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
  cities: City[] = CITIES;
  weather: Object;
  @Input() searchedCity: string;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }
  
  ngOnChanges(){
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather(this.searchedCity).subscribe(data => {
      this.weather = data;
    });
  }
}
