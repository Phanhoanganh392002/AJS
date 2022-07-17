import {Component,Input} from "@angular/core";
import {IStudent} from "../interfase/student.interfase";
import {IClass} from "../interfase/class.interface";

@Component({
  selector:'app-student',
  //template:'<h1>Day la Component cua Student</h1>'
  templateUrl:'./student.html'
})
export class StudentComponent {
  @Input()
  data!: IClass;


}
