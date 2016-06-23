import {Component} from '@angular/core';
@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  names: string[];
  
  constructor() {
    this.names = ['Pedro', 'João', 'Henrique', 'Mário'];

  }
}
