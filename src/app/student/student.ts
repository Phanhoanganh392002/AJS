import {Component, Input} from "@angular/core";

@Component({
  selector:'app-student',
  //template:'<h1>Day la Component cua Student</h1>'
  templateUrl:'./student.html'
})
export class StudentComponent {
  @Input("studentName") studentName!: string;
  @Input("studentAge") studentAge!: number;

}
