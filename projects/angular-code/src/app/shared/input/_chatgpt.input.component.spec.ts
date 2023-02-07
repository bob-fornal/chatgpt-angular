import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    });

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
  });

  it('should emit the updated value', () => {
    const value = 'Test value';
    let emittedValue: string = '';

    component.valueChange.subscribe((value) => {
      emittedValue = value;
    });

    component.onInput(value);
    expect(emittedValue).toBe(value);
  });

  it('should update the value', () => {
    const value = 'Test value';

    component.onInput(value);
    expect(component.value).toBe(value);
  });
});
