import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-meeting-scheduler',
  templateUrl: './meeting-scheduler.component.html',
  styleUrls: ['./meeting-scheduler.component.css']
})
export class MeetingSchedulerComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'atividade bcc', date:'2023-11-25' },
      { title: 'event 2', date: '2019-04-02' }
      // Adicione mais eventos se necessário
    ],

  };

  availableTimes: { [key: string]: string[] } = {
    '2023-11-25': ['08:00', '10:00', '13:00'],
    '2019-04-02': ['09:00', '11:00', '14:00']
    // Adicione os horários disponíveis para cada dia aqui
  };

  modalRef!: BsModalRef;
  modalContent = '';

  constructor(private modalService: BsModalService) {}

  handleDateClick(arg: DateClickArg) {
    const clickedDate = arg.dateStr;
    const availableTimesForDate = this.availableTimes[clickedDate];

    if (availableTimesForDate && availableTimesForDate.length > 0) {
      const formattedTimes = availableTimesForDate.join(', ');

      this.modalContent = `
        <p>Horários disponíveis em ${clickedDate}:</p>
        <p>${formattedTimes}</p>
      `;

      this.openModal();
    } else {
      this.modalContent = `<p>Não há horários disponíveis em ${clickedDate}.</p>`;
      this.openModal();
    }
  }

  openModal() {
    this.modalRef = this.modalService.show(ModalContentComponent, {
      initialState: {
        content: this.modalContent
      }
    });
  }
}
