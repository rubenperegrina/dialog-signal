import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogSignal = signal(false);
}
