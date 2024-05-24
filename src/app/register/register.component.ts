import { Component } from '@angular/core';
import { ServicioUsuario } from 'src/app/services/user.service';
import { Usuario } from 'src/app/model/user';
import { LocalDate } from '@js-joda/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registroExitoso: boolean = false;
  usuario: Usuario = { // Cambiado el nombre de la variable de 'user' a 'usuario'
    nombre: '',
    correo: '',
    fechaNacimiento: LocalDate.now(),
    contrasena: '' 
  };

  constructor(private userService: ServicioUsuario) { } // Corregido el nombre del servicio de 'UserService' a 'ServicioUsuario'

  onSubmit() {
    this.userService.registrarUsuario(this.usuario).subscribe(
      response => {
        console.log('Usuario registrado correctamente', response);
        alert("Soy Java Master")
         // Después de enviar exitosamente, resetea el objeto usuario
    this.usuario = {
      nombre: '',
      correo: '',
      fechaNacimiento: LocalDate.now(),
      contrasena: ''
    };
    
    // Establece registroExitoso a true para mostrar el mensaje de éxito
    this.registroExitoso = true;
      },
      error => {
        console.error('¡Hubo un error al registrar el usuario!', error);
      }
    );
  }
}
