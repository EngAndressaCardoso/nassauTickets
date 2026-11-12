// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login-atendente',
//   templateUrl: './login-atendente.page.html',
//   styleUrls: ['./login-atendente.page.scss'],
//   standalone: false,
// })
// export class LoginAtendentePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-atendente',
  templateUrl: './login-atendente.page.html',
  styleUrls: ['./login-atendente.page.scss'],
  standalone: false
})

export class LoginAtendentePage {

  usuario = '';
  senha = '';
  mensagem = '';

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.usuario = '';
    this.senha = '';
    this.mensagem = '';
  }

  entrar() {
    // Verifica se os campos foram preenchidos
    if (!this.usuario.trim() || !this.senha) {
      this.mensagem = 'Preencha o usuário e a senha.';
      return;
    }

    // Credenciais fictícias para testar o aplicativo
    if (
      this.usuario.trim() === 'atendente' &&
      this.senha === '1234'
    ) {
      this.mensagem = '';

      // Abre a tela principal do atendente
      this.router.navigate(['/inicio-atendente']);
    } else {
      this.mensagem = 'Usuário ou senha inválidos.';
    }
  }

  // Vai para a página de rucuperação de senha
  esqueciSenha() {
    this.router.navigate(['/recuperar-senha']);
  }

}