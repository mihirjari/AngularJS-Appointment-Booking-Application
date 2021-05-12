import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Appointment} from '../appointment';
import {Router} from '@angular/router';
import {AppointmentServiceService} from '../appointment-service.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  private dataToSend: any;
  selected: "10:00 AM";

  constructor(private appointmentService: AppointmentServiceService, private router: Router, private datePipe: DatePipe) { 

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const today = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, today);
    this.maxDate = new Date(currentYear, currentMonth+2, 30);

  }

  ngOnInit(): void {

    document.title = "Appointment Booking System - Add Appointment"

    
  }

  saveAppointment(appointmentFormData: NgForm){

   var phoneRegex = /^\d{10}$/;
   var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if(!(appointmentFormData.value.contact.match(phoneRegex)) || !(appointmentFormData.value.email.match(emailRegex)))
   {
      var alertDialog = document.querySelector('#alert');
      alertDialog.classList.add('show');
      setTimeout(()=>{

        alertDialog.classList.remove('show');
      }, 5000);
      return;
   }
    
    if(!appointmentFormData.value.fullname && !appointmentFormData.value.date && !appointmentFormData.value.time && !appointmentFormData.value.email && !appointmentFormData.value.contact){
      
      
      var alertDialog = document.querySelector('#alert');
      alertDialog.classList.add('show');
      setTimeout(()=>{

        alertDialog.classList.remove('show');
      }, 5000);
    } 
    else{

      if(this.datePipe.transform(appointmentFormData.value.date, 'shortDate') == null){

        var alertDialog = document.querySelector('#alert');
      alertDialog.classList.add('show');
      setTimeout(()=>{

        alertDialog.classList.remove('show');
      }, 5000);
      }
      this.dataToSend = {
        appointmentDate: this.datePipe.transform(appointmentFormData.value.date, 'shortDate'),
        appointmentTime: appointmentFormData.value.time,
        fullName: appointmentFormData.value.fullname,
        email: appointmentFormData.value.email,
        contact: appointmentFormData.value.contact
      };
      
      this.appointmentService.saveToDatabaseFunction(this.dataToSend);
      var alertDialog = document.querySelector('#successAlert');
      alertDialog.classList.add('show');
      setTimeout(()=>{

        alertDialog.classList.remove('show');
        this.router.navigateByUrl("");
      }, 5000);
      
      
    }
    
  }

}
