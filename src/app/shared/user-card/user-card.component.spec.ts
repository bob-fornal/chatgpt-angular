import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    component.user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      imageUrl: 'https://example.com/johndoe.jpg'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user name', () => {
    const cardTitle = fixture.nativeElement.querySelector('.card-title');
    expect(cardTitle.textContent).toBe('John Doe');
  });

  it('should display user email', () => {
    const cardText = fixture.nativeElement.querySelector('.card-text');
    expect(cardText.textContent).toBe('johndoe@example.com');
  });

  it('should display user image', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toBe('https://example.com/johndoe.jpg');
  });
});
