import { Component, OnInit } from '@angular/core';
import {Appointment} from '../appointment';
import {AppointmentServiceService} from '../appointment-service.service';
import {Params, Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import {DatePipe} from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css'],
  providers: [AppointmentServiceService]
})
export class AppointmentDetailsComponent implements OnInit {

  appointmentReceived: Appointment;
  minDate: Date;
  maxDate: Date;
  selected: String;
  setFullDate: String;
  private dateToSend: String;
  private updateDataToSend: any;
  
  
  

  constructor(private appointmentService: AppointmentServiceService, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient, private datePipe: DatePipe) {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const today = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, today);
    this.maxDate = new Date(currentYear, currentMonth+2, 30);
    
   }


  ngOnInit(): void {
    
    
    this.activatedRoute.params.pipe(switchMap((parameter: Params) => {

      return this.appointmentService.getSingleAppointment(parameter.id);
    })).subscribe((appointment: Appointment) => {


      this.appointmentReceived = appointment;
      
    });

    
  }

 

  updateAppointment(updateFormData: NgForm){

    console.log(updateFormData.value);
    
    if(!updateFormData.value.fullname || !updateFormData.value.date || !updateFormData.value.email || !updateFormData.value.contact || !updateFormData.value.time){

      document.querySelector('#alert').classList.add('show');

      setTimeout(() => {
          document.querySelector('#alert').classList.remove('show');
      }, 3000);
      return;
    }else{
    
    document.querySelector('#form').classList.add('formHide');
    this.dateToSend = this.datePipe.transform(updateFormData.value.date, 'd/M/YYYY');
    this.updateDataToSend = {
      appointmentDate: this.dateToSend,
      appointmentTime: updateFormData.value.time,
      fullName: updateFormData.value.fullname,
      email: updateFormData.value.email,
      contact: updateFormData.value.contact

    };
    
    this.appointmentService.updateAppointment(this.updateDataToSend, this.appointmentReceived._id);

    location.href = "";
  }
  }

  delete(){
  
    this.appointmentService.deleteAppointment(this.appointmentReceived._id);

    location.href = "";
  }

  showForm(){
    
    document.querySelector('#form').classList.remove('formHide');
  }

}
