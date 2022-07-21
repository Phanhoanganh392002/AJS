import {Component} from "@angular/core";
import {IAssignment1} from "../interface/Assignment1.interface";
import {HttpClient, HttpParams} from "@angular/common/http";


@Component({
  selector: 'app-Assignment1',
  templateUrl: './Assignment 1.component.html'
})
export class Assignment1Component {


  data: IAssignment1 | undefined;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    const url = 'http://api.openweathermap.org/data/2.5/forecast';
    let params = new HttpParams();
    params = params.append('q','Hanoi');
    params = params.append('appid','09a71427c59d38d6a34f89b47d75975c');
    params = params.append('units','metric');
    this.http.get<IAssignment1>(url,{params})
      .subscribe(value => {
        this.data = value;
      });
  }
}
