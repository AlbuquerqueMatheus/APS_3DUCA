import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  creatForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
  ngOnInit(): void {
    this.creatForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        nick: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      });
  }
  submitLogin() {
    debugger
    var dadosCreate = this.creatForm.getRawValue() as LoginModel;
  }
}