import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { FrameworkComponent } from './framework/framework.component';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {DatePipe} from '@angular/common';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HomePageComponent,
    FrameworkComponent,
    AboutComponent,
    AppointmentsComponent,
    AddAppointmentComponent,
    AppointmentDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'appointments',
        component: AppointmentsComponent
      },
      {
        path: 'add',
        component: AddAppointmentComponent
      },
      {
        path: 'appointment/:id',
        component: AppointmentDetailsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, DatePipe],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
