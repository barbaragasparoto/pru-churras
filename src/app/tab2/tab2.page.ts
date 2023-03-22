import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


valendo=1;
pontuacaoA=0;
pontuacaoB=0;
vitoriaA=0;
vitoriaB=0;


constructor() {}

aumentarValor(valor: number){
this.valendo=valor
}

aumentarTento(time: number){
if(time===1){
this.pontuacaoA += this.valendo;
this.checarVitoria();
this.valendo = 1;
}

if(time===2){
this.pontuacaoB += this.valendo;
this.checarVitoria();
this.valendo = 1;
}

}

diminuirTento(time: number){
if(time === 1 && this.pontuacaoA > 0){
  this.pontuacaoA -= this.valendo;

  if(this.pontuacaoA <= 0) {
    this.pontuacaoA = 0
  }

  this.valendo = 1
  }

if(time === 2 && this.pontuacaoB > 0){
    this.pontuacaoB -= this.valendo;

    if(this.pontuacaoB <= 0) {
      this.pontuacaoB = 0
    }

    this.valendo = 1
    }
}


checarVitoria(){
  if(this.pontuacaoA>=12){
    this.pontuacaoA = 0
    this.pontuacaoB = 0
    this.vitoriaA++;
  }

  if(this.pontuacaoB>=12){
    this.pontuacaoB = 0
    this.pontuacaoA = 0
    this.vitoriaB++;
  }

}

limpar(){
  this.pontuacaoA = 0
  this.pontuacaoB = 0
  this.valendo = 1
  this.vitoriaA = 0
  this.vitoriaB = 0

}

}


