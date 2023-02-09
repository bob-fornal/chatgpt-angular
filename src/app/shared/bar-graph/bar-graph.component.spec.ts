import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphComponent } from './bar-graph.component';

describe('BarGraphComponent', () => {
  let component: BarGraphComponent;
  let fixture: ComponentFixture<BarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct number of bars', () => {
    const bars = fixture.nativeElement.querySelectorAll('.bar');
    expect(bars.length).toBe(component.barData.length);
  });

  it('should have the correct width for each bar', () => {
    const bars = fixture.nativeElement.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
      const barWidth = parseInt(bars[i].style.width.split('px')[0], 10);
      expect(barWidth).toBe(component.barData[i].value * 10);
    }
  });

  it('should have the correct color for each bar', () => {
    const bars = fixture.nativeElement.querySelectorAll('.bar');
    for (let i = 0; i < bars.length; i++) {
      expect(bars[i].style.backgroundColor).toBe(component.barData[i].color);
    }
  });
});
