import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Matheus', 'Lidiane', 'Donny'];
  filteredOptions?: Observable<string[]>;

  availableTimes: string[] = ['8:00', '9:00', '10:00', '11:00'];
  selectedTimeControl = new FormControl('');
  filteredTime?: Observable<string[]>;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    timeCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredTime = this.selectedTimeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTime(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterTime(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.availableTimes.filter(time => time.toLowerCase().includes(filterValue));
  }
}
