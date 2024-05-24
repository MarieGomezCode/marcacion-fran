import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {
  @Output() clickBoton: EventEmitter<void> = new EventEmitter<void>();

  onClickBoton() {
    this.clickBoton.emit();
  }
}
//Creo que no era necesario incluir esa logica para el boton, pero mas adelanto evaluamos si es necesario