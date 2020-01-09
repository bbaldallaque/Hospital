import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // @ViewChild('txtporcentaje') txtporcentaje: ElementRef

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() CambioValor: EventEmitter <number> = new EventEmitter();

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('porcentaje', this.porcentaje);
  }

  ngOnInit() {
  }

  Onchange(newValue: number) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];


    console.log( newValue );

    if( newValue >= 100 ) {
      this.porcentaje = 100;
    }else if ( newValue <= 0 ){
     this.porcentaje = 0;
    }else {
    this.porcentaje = newValue;
  }


    // elemHTML.value = this.porcentaje;

    // this.txtporcentaje.nativeElement.value = this.porcentaje;

    this.CambioValor.emit( this.porcentaje );

    // this.txtporcentaje.nativeElement.focus();

  }

    cambiarValor ( valor: number ) {


   if (this.porcentaje >= 100 && valor > 0) {
     this.porcentaje = 100;
     return;
   }
     if ( this.porcentaje <= 0 && valor < 0 ) {
       this, this.porcentaje = 100;
       return;
     }
   this.porcentaje = this.porcentaje + valor;

   this.CambioValor.emit( this.porcentaje );
 }

}
