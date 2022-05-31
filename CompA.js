import { STATUS } from "./CompB";
export class Contacto {
    Nombre = 'nombre';
    Apellido = 'apellido';
    Email = 'email';
    Conectado = STATUS.CONECTADO;

    constructor(Nombre, Apellido, Email, Conectado){
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Conectado = Conectado;
    }
}