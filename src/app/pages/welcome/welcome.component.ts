import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: 
  `
  <markdown [src]="'assets/markdowns/welcome.md'" ></markdown>
  `
})
export class WelcomeComponent {


}
