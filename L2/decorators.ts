// In Angular, a decorator is a function that adds metadata to a class, its members, or its method arguments. Decorators are a way to extend the functionality of a class or to modify its behavior in a declarative way.

// There are several types of decorators in Angular, including 
// component decorators, 
// directive decorators, 
// pipe decorators, 
// and service decorators.

// Here is an example of a component decorator in Angular:

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent { }
// In this example, the @Component decorator is used to define a component in Angular. It takes an object with various properties, such as the component's selector, template URL, and style URLs.



// Here is an example of a directive decorator in Angular:


import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective { }
// In this example, the @Directive decorator is used to define a directive in Angular. It takes an object with the directive's selector.

// Decorators are an important part of Angular and are used extensively throughout the framework. They provide a way to add functionality to a class in a declarative way, making it easier to understand and maintain the code.