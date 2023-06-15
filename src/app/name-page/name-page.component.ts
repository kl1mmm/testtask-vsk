import {Component} from '@angular/core';

@Component({
  selector: 'app-name-page',
  templateUrl: './name-page.component.html',
  styleUrls: ['./name-page.component.css']
})
export class NamePageComponent {
  userName: string = '';
  namesArr = ['Маша', 'Даша', 'Паша'];


  addNewName() {
    this.namesArr.push(this.userName);
    this.userName = '';
  }

  constructor() {
  }

  ngOnInit() {
  }
}
