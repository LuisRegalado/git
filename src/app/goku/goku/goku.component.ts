import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goku',
  templateUrl: './goku.component.html',
  styleUrls: ['./goku.component.css']
})
export class GokuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enviarAGoten: string;

  mensajeParaGoten(mensaje: string){
    this.enviarAGoten = mensaje;
  }

}
