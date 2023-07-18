import { Component } from '@angular/core';
import { Articulo } from './interfaces/nombres-costos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PracticoAngular';

  nombrescostos: Articulo [] = [
    {
      nombre: 'Taza',
      costo: '300'
    },
    { 
      nombre: 'Botella',
      costo: '200'
    },
    {
      nombre: 'Alfombra',
      costo: '500',
    },
    {
      nombre: 'Acolchado',
      costo: '1400',
    },
    {
     nombre: 'Sabanas',
     costo: '700',
    },
    

  ];

  tablaVisible: boolean = true;
}  
