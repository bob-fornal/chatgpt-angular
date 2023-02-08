import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '@shared/modal/modal.component';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent {

  @Input() warningText: string;

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { title: 'Warning', message: 'Are you sure you want to proceed?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The user confirmed the warning');
      } else {
        console.log('The user cancelled the warning');
      }
    });
  }
}
