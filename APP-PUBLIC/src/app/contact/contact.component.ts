import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact_image: string = "assets/contact_image.png";

  constructor() { }

  ngOnInit(): void {
  }

}
