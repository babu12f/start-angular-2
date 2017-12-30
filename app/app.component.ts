import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{ name}} In Main Component</h1> 
  // 			<babor></babor>
  // 			<user></user>`,
  template: `
  			<ul>
  				<li><a href="/">Home</a></li>
  				<li><a href="/about">About</a></li>
  			</ul>
  			<router-outlet></router-outlet>`,
  styles:[`
  	h1{
  		color:green;
  	}
  `],
})
export class AppComponent  { name = 'Babor'; }
