// In Angular, a component goes through a lifecycle of creation, rendering, and destruction. The component's lifecycle is managed by Angular, and you can tap into and act upon different stages of this lifecycle by implementing certain lifecycle hook methods in your component class.

// Here is an example of a component with lifecycle hook methods in Angular:


import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit, OnDestroy {

  // The constructor is called when the component is created
  constructor() { }

  // The ngOnInit hook is called after the component has been initialized
  ngOnInit() {
    console.log('My component has been initialized');
  }

  // The ngOnDestroy hook is called when the component is about to be destroyed
  ngOnDestroy() {
    console.log('My component is about to be destroyed');
  }

}

// In this example, the MyComponent component has two lifecycle hook methods: ngOnInit and ngOnDestroy. The ngOnInit hook is called after the component has been initialized, and the ngOnDestroy hook is called just before the component is destroyed.

// You can implement other lifecycle hook methods in your component, such as ngAfterViewInit, ngOnChanges, and ngDoCheck, to tap into different stages of the component's lifecycle.