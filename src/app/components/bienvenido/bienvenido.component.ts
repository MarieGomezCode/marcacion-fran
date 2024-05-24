import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent {
  mostrarRegistro = false;
  mostrarLogin = false;

  mostrarFormularioRegistro() {
    this.mostrarRegistro = !this.mostrarRegistro;
  }
  mostrarFormularioLogin() {
    this.mostrarLogin =!this.mostrarLogin;
  }


}
