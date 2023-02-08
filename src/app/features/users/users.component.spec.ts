import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of users', () => {
    expect(component.users.length).toBeGreaterThan(0);
  });

  it('should display the user name in the table', () => {
    const compiled = fixture.nativeElement;
    const firstUserName = component.users[0].name;
    expect(compiled.querySelector('td').textContent).toContain(firstUserName);
  });
});
