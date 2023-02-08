import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { UsersComponent } from './features/users/users.component';
import { UserCardsComponent } from './features/user-cards/user-cards.component';
import { UserCardComponent } from './shared/user-card/user-card.component';
import { ModalComponent } from './shared/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WarningDialogComponent } from './features/warning-dialog/warning-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    UsersComponent,
    UserCardsComponent,
    UserCardComponent,
    ModalComponent,
    WarningDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
