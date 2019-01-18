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
    let weatherUrl = `${this.baseUrl}${city}&units=metric&${this.apiKey}`;
    return this.http.get(weatherUrl);
  }
}
