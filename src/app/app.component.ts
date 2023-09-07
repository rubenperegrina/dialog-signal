import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './services/dialog.service';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  template: `
  <h1>Dialog with signals</h1>
  <button (click)="openDialog()">Open dialog</button>
  <app-dialog/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  dialogService = inject(DialogService);

  openDialog() {
    this.dialogService.dialogSignal.set(true);
  }
}
