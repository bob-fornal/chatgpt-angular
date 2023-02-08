import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from '@shared/user-card/user-card.component';
import { UserCardsComponent } from './user-cards.component';

describe('UserCardsComponent', () => {
  let component: UserCardsComponent;
  let fixture: ComponentFixture<UserCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UserCardComponent,
        UserCardsComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardsComponent);
    component = fixture.componentInstance;
    component.users = [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        imageUrl: 'https://example.com/image1.jpg'
      },
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        imageUrl: 'https://example.com/image2.jpg'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user cards', () => {
    const compiled = fixture.debugElement.nativeElement;
    const cards = compiled.querySelectorAll('.card');
    expect(cards.length).toBe(2);
  });
});
