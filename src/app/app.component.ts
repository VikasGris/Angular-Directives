import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5]
  oddNumbers = [1, 3, 5]
  evenNumbers = [2, 4]
  onlyOdd = false;
  value = 13;
  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];
  
  // onIntervalFired(firedNumber: number) {
  //   console.log(firedNumber);
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber)
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  // }
}
