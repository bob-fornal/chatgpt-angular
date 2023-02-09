import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent {

  public barData = [
    { value: 20, color: 'red' },
    { value: 10, color: 'blue' },
    { value: 5, color: 'green' },
    { value: 15, color: 'purple' },
  ];

  constructor() { }

}
