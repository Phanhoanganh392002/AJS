import {Component} from "@angular/core";
import {IMenu} from "../interface/menu.interface";
import {ITodaymenu} from "../interface/todaymenu.interface";

@Component({
  selector:'app-grouptask',
  templateUrl:'grouptask.component.html'
})
export class GrouptaskComponent{
 menu: IMenu | undefined
 data: ITodaymenu |undefined
}
