import { Component } from '@angular/core';

@Component({
  selector: 'babor',
  template: `<h1>my name is babor</h1>`,
  styles:[`
	  h1{
	  	color:black;
	  }
  `],
})
export class BaborComponent  { name = 'Babor'; }
