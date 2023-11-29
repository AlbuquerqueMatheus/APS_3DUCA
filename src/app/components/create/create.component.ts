import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LocalStorageService } from '../../local-storage.service';

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
    private router: Router, private http: HttpClient, private LocalStorageService: LocalStorageService) { }
  ngOnInit(): void {
    this.creatForm = this.formBuilder.group(
      {
        nome: ['', [Validators.required]],
        nick: ['', [Validators.required]],
        email: ['', [Validators.required,]],
        senha: ['', [Validators.required]]
      });
  }
  submitLogin() {
    debugger
    var dadosCreate = this.creatForm.getRawValue() as LoginModel;
  }

  createAccount() {
    this.http.post("https://api-vapor.fly.dev/usuarios/cadastrar", {
      name: this.creatForm.value.nome,
      userName: this.creatForm.value.nick,
      registration: this.creatForm.value.email,
      password: this.creatForm.value.senha
    }).subscribe((response) => {
      alert("Usuário cadastrado com sucesso! acesse seu login");
      location.reload();
      
    }, (error) => {
      console.log(error);
      alert("Erro ao cadastrar usuário!");
    })
  }
}