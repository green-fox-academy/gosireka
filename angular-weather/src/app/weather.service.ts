import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseUrl = environment.baseUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Object> {
    let weatherUrl = `${this.baseUrl}find?q=${city}&units=metric&${this.apiKey}`;
    return this.http.get<Object>(weatherUrl);
  }
  getForecast(id: number): Observable<Object> {
    let forecastUrl = `${this.baseUrl}forecast?id=${id}&units=metric&${this.apiKey}`;
    return this.http.get(forecastUrl);
  }
}
