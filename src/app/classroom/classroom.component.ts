import {Component, Input} from "@angular/core";
import {IClass} from "../interfase/class.interface"
@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2204M';
  classStatus = true;
  @Input()
  data!: IClass;


  // tao 1 danh sach sinh vien
  classArray: IClass[] = [
    {className:'T2204M',clasStatus:true},
    {className:'T2203S',clasStatus:false},
  ];

  teacherNames = [
    'Trịnh Quang Hòa',
    'Nguyễn Tuân',
    'Đặng Kim Thi'
  ];
  subjectNames=[
    'LBEP',
    'HCJS',
    'AJS',
    'DMS'
  ];
  changeName(){
    this.className = 'T2203E';
  }
  changeStatus(){
    this.classStatus = !this.classStatus;
  }
}
