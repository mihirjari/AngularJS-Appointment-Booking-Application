import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {AppointmentServiceService} from '../appointment-service.service';
import {Appointment} from '../appointment';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentList: Appointment[];

  constructor(private appointmentService : AppointmentServiceService ) { }

  ngOnInit(): void {

    document.title = "Appointment Booking System - My Appointments";

    this.appointmentService.getAppointmentList().then((appointments: Appointment[]) => {

      this.appointmentList = appointments.map((item) => item);
    })
  }

}
