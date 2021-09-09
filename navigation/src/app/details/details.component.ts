import { Component, OnInit } from '@angular/core';
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  title = 'CustomTable';

  data: Array<any>;
  constructor(){
    this.data = [
        { firstName: 'John', lastName: 'Doe', age: '35' },
        { firstName: 'Michael', lastName: 'Smith', age: '39' },
        { firstName: 'Michael', lastName: 'Jordan', age: '45' },
        { firstName: 'Tanya', lastName: 'Blake', age: '47' }
    ];
}
}