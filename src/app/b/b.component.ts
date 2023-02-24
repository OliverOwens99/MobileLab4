import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {

  title:string = 'my-first-app';
  name:string ='Olly';
  age:number = 21;
}
