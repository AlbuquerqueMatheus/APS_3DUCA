import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions?: Observable<string[]>;
  monitorSelectedId: any;
  selectedMonitorName: any;

  availableTimes: string[] = ['8:00', '9:00', '10:00', '11:00'];
  selectedTimeControl = new FormControl('');
  filteredTime?: any[] = [];

  selectedTime: any;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    timeCtrl: ['', Validators.required],
  });

  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
     this.getMonitors()
  }


  getMonitors()  {
    return this.http.get('https://api-vapor.fly.dev/monitores', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).subscribe((result: any) => {
      this.options = result.map((monitor: any) => ({
        name: monitor.name,
        id: monitor.id
      }));

      console.log(this.options);
    }, (error) => {
      console.error(error);
    })
  }

  getHorariosByMonitor() {
    this.http.get('https://api-vapor.fly.dev/monitores/' + this.monitorSelectedId + '/agenda', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).subscribe((result: any) => {
      this.availableTimes = result ;
    }, (error) => {
      console.error(error);
    })
  }
  // getHorariosByMonitor() {
  //   this.http.get('https://api-vapor.fly.dev/monitores/:id/agenda', {
  //     headers: {
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     }
  //   }).subscribe((result: any) => {
  //     this.availableTimes = result ;
  //   }, (error) => {
  //     console.error(error);
  //   })
  // }

  // https://api-vapor.fly.dev/monitores/:id/agenda

  selectedMonitor(monitor: any) {
    this.monitorSelectedId = monitor.id;
    this.selectedMonitorName = monitor.name;
  }

  selectedTimeMonitor(time: any) {
    this.selectedTime = time;
  }

  agendar() {
    const data = {
      monitor: this.monitorSelectedId,
      date: this.selectedTime
    }
  
    this.http.post('https://api-vapor.fly.dev/agendamentos', data, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).subscribe((result: any) => {
      alert('Agendamento realizado com sucesso!');
      this.router.navigate(['/']);

    }, (error) => {
      console.error(error);
      alert('Erro ao realizar agendamento!');
    })
  }

  formatTime(horario: any) {
    if (!horario) return;
    return new Date(horario).toLocaleTimeString('pt-BR', { day: '2-digit', month: 'long' , hour: '2-digit', minute: '2-digit' });
  }
  

  isValid() {
    if (!this.monitorSelectedId || !this.selectedTime) return true;
    return false;
  }
}
