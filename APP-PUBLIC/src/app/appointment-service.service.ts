import { Injectable } from '@angular/core';
import {Appointment} from './appointment';
import {HttpClient, HttpResponse} from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  private url = "http://localhost:3000/api/appointments";
  private singleUrl = "http://localhost:3000/api/appointment";

  appointmentList: Appointment[];

  constructor(private http: HttpClient) { }

  getAppointmentList(): Promise<void | Appointment[]>{

    return this.http.get(this.url)
    .toPromise()
    .then(response => response as Appointment[])
    .catch(this.handleErrorFunction);
  }

  getSingleAppointment(appointmentId: string): Promise<void | Appointment>{

    return this.http.get(this.singleUrl+'/'+appointmentId)
    .toPromise()
    .then((response) => response as Appointment)
    .catch(this.handleErrorFunction);
  }

  saveToDatabaseFunction(appointment: Appointment): Promise<void | Appointment>{

    return this.http.post(this.url, appointment)
    .toPromise()
    .then((response) => response as Appointment)
    .catch(this.handleErrorFunction);
  }

  updateAppointment(updatedAppointment: Appointment, id: string): Promise<void | Appointment>{

    return this.http.put(this.singleUrl+"/"+id, updatedAppointment)
    .toPromise()
    .then((response) => response as Appointment)
    .catch(this.handleErrorFunction);
  }

  deleteAppointment(id: string){

    this.http.delete(this.singleUrl+"/"+id)
    .toPromise()
    .then((response) => response)
    .catch(this.handleErrorFunction);
  }

  private handleErrorFunction(error: any){

    console.log(error);
  }
}
