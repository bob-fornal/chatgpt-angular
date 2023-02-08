import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    { name: 'John Doe', email: 'john@example.com', age: 32 },
    { name: 'Jane Doe', email: 'jane@example.com', age: 28 },
    { name: 'Bob Smith', email: 'bob@example.com', age: 41 },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
