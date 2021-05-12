import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about_image: string = "assets/about_image.png";

  constructor() { }

  ngOnInit(): void {

    document.title = "Appointment Booking System - About";
  }

}
