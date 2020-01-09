import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progess',
  templateUrl: './progess.component.html',
  styles: []
})
export class ProgessComponent implements OnInit {

  porcentaje1: number = 20;
  porcentaje2: number = 30;

  constructor() { }

  ngOnInit() {
  }
}
