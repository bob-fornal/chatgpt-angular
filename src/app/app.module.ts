import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { UsersComponent } from './features/users/users.component';
import { UserCardsComponent } from './features/user-cards/user-cards.component';
import { UserCardComponent } from './shared/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    UsersComponent,
    UserCardsComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
