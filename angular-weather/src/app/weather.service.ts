import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService { 

  constructor(private http: HttpClient) { }

  getWeather(city:string): Observable<Object>{
    const weatherUrl = `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&APPID=b6d6194629a5f9c209603b19ef7d3f7e`; 
    return this.http.get(weatherUrl);
  }
}
