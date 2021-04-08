import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Roberto';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Francisca','Roberto','Juan','Camila','Joaquin'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  cambiarCliente(){
    if(this.nombre==='Roberto'){
      this.nombre = 'Francisca';
      this.genero = 'femenino';
    }
    else{
      this.nombre = 'Roberto';
      this.genero= 'masculino';
    }
    
  }

  borrarCliente(){
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Roberto',
    edad: 22,
    direccion: 'Santiago, Chile'
  }


  // Json Pipe
  heroes= [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];


  // Async Pipe
  miObservable = interval(2000);  // va emitir 0, 1, 2, 3,... cada 2 seg

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });

}
