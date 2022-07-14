import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student";
import {ClassroomComponent} from "./classroom/classroom.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
