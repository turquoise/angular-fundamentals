import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //title: string;
  //groceries: string[];
  //numberOne: number = 1;
  //numberTwo: number = 2;
  isHappy: boolean = false;
  //logo: string = 'assets/img/logo.svg';
  name: string = '';

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false
    },
  ];

  constructor() {
    //this.title = 'Ultimate Angular';
  }

  // handleBlur(event: any) {
  //   this.name = event.target.value;
  //   console.log(event);
  // }

  handleChange(value: string) {
    this.name = value;
  }

  handleClick(value: string) {
    //this.name = "Motto";
    console.log(value);
  }

}
