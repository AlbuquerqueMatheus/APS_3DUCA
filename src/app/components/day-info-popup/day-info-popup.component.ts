import { Component, Inject, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-day-info-popup',
  templateUrl: './day-info-popup.component.html',
  styleUrls: ['./day-info-popup.component.css']
})
export class DayInfoPopupComponent implements OnInit {
    // Dados recebidos do calendário
    date: Date;

    // Horários disponíveis e horário selecionado
    availableTimes: string[] = ['09:00', '10:00', '11:00', '14:00', '15:00'];
    selectedTime: string | null = null;
  
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DayInfoPopupComponent>) {
      this.date = data.date;
    }
    
    ngOnInit(): void {
      this.date = this.data.date;
    }

    // Função para agendar
    scheduleAppointment(): void {
      if (this.selectedTime) {
        //adicionar a lógica para agendar o horário selecionado
        console.log('Horário selecionado:', this.selectedTime);
        //enviar para o backend ou realizar alguma outra ação
      } else {
        console.log('Selecione um horário para agendar.');
      }
    }

    closeDialog(): void {
      this.dialogRef.close();
    }
}
