// Data binding in Angular using a component class and a template:

// Component class:

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
  message = 'Hello';

  onClick() {
    this.message = 'Welcome to my app!';
  }
}


// Template:
// <!-- Interpolation -->

<h1>{{title}}</h1>
<p>{{message}}</p>

// <!-- Property binding -->
<input [value]="message">

// <!-- Event binding -->
<button (click)="onClick()">Click me</button>

// <!-- Two-way data binding -->
<input [(ngModel)]="message">
'

// In this example, the component class has a title and message property. The template uses interpolation to display the title and message in the template. The template also has an input element that is bound to the message property using property binding. When the button is clicked, the onClick method in the component class is called and the message property is updated. The two-way data binding is used to bind the message property to the input element, so that any changes to the input element are reflected in the message property and vice versa.
