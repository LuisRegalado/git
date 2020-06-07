import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goten',
  templateUrl: './goten.component.html',
  styleUrls: ['./goten.component.css']
})
export class GotenComponent implements OnInit {

  @Input() mensajeGoten : string;

  constructor() { }

  ngOnInit(): void {
  }

}
