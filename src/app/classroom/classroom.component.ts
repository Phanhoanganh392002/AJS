import {Component} from "@angular/core";
import {IStudent} from "../interfase/student.interfase";

@Component({
  selector:'app-classroom',
  templateUrl:'./classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2204M';
  classStatus = true;
  studentAge=[18,19];

  //tao 1 danh sach sinh vien
  studenArray: IStudent[] = [
    {studentName:'Hoàng Văn Nam',studentAge:18, phoneNumber:'043252345324532'},
    {studentName:'Vũ Trưởng Thành',studentAge:19, phoneNumber:'04328545532'}
  ];

  studentName= [
    'Hoàng Văn Nam',
    'Vũ Trưởng Thành'
  ];
  teacherNames = [
    'Trinh Quang Hoa',
    'Nguyen Tuan',
    'Dang Kim Thi'
  ];
  subjectName=[
    'LBEP',
    'HCJS',
    'AJS',
    'DMS'
  ];

  changeName() {
    this.className = 'T2203E';
  }
  changeStatus() {
    this.classStatus = !this.classStatus;
  }
}
