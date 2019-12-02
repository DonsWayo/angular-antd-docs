import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  template: 
  `
  <markdown [src]="'assets/markdowns/welcome.md'" ></markdown>
  `
})
export class StartComponent  {


}
