import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  home_image: string = "assets/home_title.png";

  constructor() { }

  ngOnInit(): void {

    document.title = "Appointment Booking System";
  }

}
