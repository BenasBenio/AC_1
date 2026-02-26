import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  vT='';
  lado1='';
  lado2='';
  lado3='';
  n1='';
  n2='';
  n3='';
  n4='';
  res = '';
  converterC(){
    this.res = ((parseFloat(this.vT)*9 + 160)/5).toFixed(2)
  }
    converterF(){
    this.res = ((parseFloat(this.vT) - 32) *(5/9)).toFixed(2)
  }

    verificarLado(){
    if(this.lado1 == this.lado2 && this.lado1 == this.lado3 ){
      this.res = "Este Triangulo é Equilátero"
    } else if (this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3 ) {
      this.res = "Este Triangulo é Isóceles"
    } else {
      this.res = "Este Triangulo é Escaleno"
    }
  }
calcularM() {
  const media =
    (parseFloat(this.n1) + parseFloat(this.n2) + parseFloat(this.n3) + parseFloat(this.n4)) / 4

  this.res = media.toFixed(2)

  if (media < 3) {
    this.res = "Retido"
  } else if (media >= 3 && media < 6) {
    this.res = "Recuperação"
  } else {
    this.res = "Aprovado"
  }
}
}
