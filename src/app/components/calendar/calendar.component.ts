import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DayInfoPopupComponent } from '../day-info-popup/day-info-popup.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  selected: Date | null = null;
  scheduledTimes: { date: string, time: string }[] = [];

  constructor(public dialog: MatDialog) {}

  openDayInfoPopup(): void {
    if (this.selected) {
      const dialogRef = this.dialog.open(DayInfoPopupComponent, {
        width: '400px',
        height: '400px',
        data: { date: this.selected } // Passando a data selecionada para o popup
      });
    }
  }
}
