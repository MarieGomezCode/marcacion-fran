import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuario} from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private router: Router, private userService: ServicioUsuario) {}

  login() {
    this.userService.login(this.correo, this.contrasena).subscribe(response => {
      // Manejar la respuesta del servidor aquí
      this.router.navigate(['/dashboard']); // Redirigir a la página de inicio después del inicio de sesión
      console.log(response);
    }, error => {
      // Manejar errores aquí, por ejemplo, mostrar un mensaje de error al usuario.
      console.error('Error al iniciar sesión:', error);
    });
  }
}
