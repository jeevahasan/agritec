import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='fc0c4e1ec49d0c022df6519574a1a2ca';
  url=' http://api.openweathermap.org/data/2.5/forecast?q=';

  constructor(private http:HttpClient) { }

  getWeather(city,code){

    return this.http.get(this.url+city+','+code+'&APPID='+this.apiKey)
  }
}
