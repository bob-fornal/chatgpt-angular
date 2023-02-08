import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ModalComponent } from '@shared/modal/modal.component';

import { WarningDialogComponent } from './warning-dialog.component';

describe('WarningDialogComponent', () => {
  let component: WarningDialogComponent;
  let fixture: ComponentFixture<WarningDialogComponent>;
  let dialog: MatDialog;
  let dialogRef: MatDialogRef<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ],
      declarations: [WarningDialogComponent, ModalComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningDialogComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    dialogRef = dialog.open(ModalComponent, {
      width: '250px',
      data: { title: 'Warning', message: 'Are you sure you want to proceed?' }
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal when the button is clicked', () => {
    spyOn(dialog, 'open').and.returnValue(dialogRef);
    component.openModal();
    expect(dialog.open).toHaveBeenCalledWith(ModalComponent, {
      width: '250px',
      data: { title: 'Warning', message: 'Are you sure you want to proceed?' }
    });
  });

  it('should set the warning text', () => {
    component.warningText = 'This is a warning';
    fixture.detectChanges();
    expect(component.warningText).toEqual('This is a warning');
  });
});
