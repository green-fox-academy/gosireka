import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})

export class ForecastComponent implements OnInit {
  forecast: Object;

  constructor(private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location) { }

  ngOnInit(): void {
    this.getCityForecast();
  }

  getCityForecast(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.weatherService.getForecast(id).subscribe(data => {
      this.forecast = data;
    });
  }

  goBack() {
    this.location.back();
  }
}
