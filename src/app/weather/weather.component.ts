import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;
  loading: boolean;

  weather;

  temp: number;
  maxtemp: number;
  mintemp: number;
  constructor(private formBuilder: FormBuilder, private service:WeatherService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        city: ['Colombo'],
      }
    );
    this.service.getWeather(this.addForm.value.city,'LK').subscribe((res)=>{
      this.weather=res;
      this.temp = Math.round((this.weather.list[0].main.temp - 273.15)*100)/100;
      this.maxtemp = Math.round((this.weather.list[0].main.temp_max - 273.15)*100)/100;
      this.mintemp = Math.round((this.weather.list[0].main.temp_min - 273.15)*100)/100;
    })
  }
  onSubmit(): void {
    this.submitted = true;
    this.service.getWeather(this.addForm.value.city,'LK').subscribe((res)=>{
      this.weather=res;
  this.temp = Math.round((this.weather.list[0].main.temp - 273.15)*100)/100;
  this.maxtemp = Math.round((this.weather.list[0].main.temp_max - 273.15)*100)/100;
  this.mintemp = Math.round((this.weather.list[0].main.temp_min - 273.15)*100)/100;
    })
}
}
