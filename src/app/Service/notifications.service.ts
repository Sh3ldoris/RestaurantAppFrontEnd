import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // tslint:disable-next-line:variable-name
  constructor(private _snackBar: MatSnackBar) { }

  notificate(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
