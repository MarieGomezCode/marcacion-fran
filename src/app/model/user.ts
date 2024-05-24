import { LocalDate } from '@js-joda/core';


export interface Usuario {
    id?: number;
    correo: string;
    nombre: string;
    fechaNacimiento: LocalDate;
    contrasena: string; // Usar "contrasena" en lugar de "contraseña"
    creadoEn?: string;
  }
  