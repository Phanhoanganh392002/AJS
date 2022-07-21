import {Component} from '@angular/core';
import {IClass} from "./interface/class.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  classArray: IClass[] = [
    {className:'T2204M',clasStatus:true},
    {className:'T2203S',clasStatus:false},
]
}
