import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-proj3';
  day="today";
  names=[
    'a',
    'b',
    'c'
  ]
  numbers=[
    {
      height:"5.7",
      age:"22"
    },
    {
      height:"5.6",
      age:"21"
    },
    {
      height:"5.5",
      age:"20"
    }
  ]
  Fruits = "3";
  textcolor="gray";
  bgColor="gray";
  styleColor="newFont"
  dateExample=Date();
}