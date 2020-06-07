import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gohan',
  templateUrl: './gohan.component.html',
  styleUrls: ['./gohan.component.css']
})
export class GohanComponent implements OnInit {

  @Output() mensajeDesdeGohan = new EventEmitter<string>();

  enviarMensaje(mensaje: string){
    this.mensajeDesdeGohan.emit(mensaje);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
