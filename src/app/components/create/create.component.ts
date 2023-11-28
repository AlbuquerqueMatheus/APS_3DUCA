import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class CreateComponent implements OnInit {

  creatForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private http: HttpClient ) { }
  ngOnInit(): void {
    this.creatForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        nick: ['', [Validators.required]],
        email: ['', [Validators.required]],
        senha: ['', [Validators.required]]
      });
  }
  submitLogin() {
    debugger
    var dadosCreate = this.creatForm.getRawValue() as LoginModel;
  }

//   {
//     "name": "Teste",
//     "userName": "teste1",
//     "password": "123456",
//     "registration": "8373625251"
// }

  createAccount() {

    const result = this.http.post("https://api-vapor.fly.dev/usuarios/cadastrar", {
      "name": this.creatForm.value.nome,
      "userName": this.creatForm.value.nick,
      "password": this.creatForm.value.senha,
      "registration": this.creatForm.value.email
    }).toPromise().then((data) => console.log(data))

  }
}