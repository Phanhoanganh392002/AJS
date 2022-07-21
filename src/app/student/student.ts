import {Component,Input} from "@angular/core";
import {IStudent} from "../interface/student.interfase";
import {IClass} from "../interface/class.interface";

@Component({
  selector:'app-student',
  //template:'<h1>Day la Component cua Student</h1>'
  templateUrl:'./student.html'
})
export class StudentComponent {
  @Input()
  data!: IClass;


}
