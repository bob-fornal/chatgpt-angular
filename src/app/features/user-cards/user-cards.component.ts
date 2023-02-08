import { Component, Input, OnInit } from '@angular/core';
import { User } from '@core/interfaces/user';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss']
})
export class UserCardsComponent implements OnInit {
  
  @Input() users: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
