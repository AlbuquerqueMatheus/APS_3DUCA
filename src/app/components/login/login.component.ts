import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        senha: ['', [Validators.required]]
      });
  }
  submitLogin() {
    const dadosLogin = this.loginForm.getRawValue() as LoginModel;
    console.log(dadosLogin);
    this.http.post('https://api-vapor.fly.dev/login',{}, {
      headers: {
        'Authorization': 'Basic ' + btoa(dadosLogin.email + ':' + dadosLogin.senha)
      }
    }).subscribe(
      (result: any) => {
        localStorage.setItem('isLoged', 'true');
        location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
