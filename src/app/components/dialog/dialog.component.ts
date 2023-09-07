import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
  <dialog [open]="isOpen()">
    <button (click)="closeDialog()">Close</button>
  </dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  dialogService = inject(DialogService);
  isOpen = this.dialogService.dialogSignal;

  closeDialog() {
    this.dialogService.dialogSignal.set(false);
  }
}
