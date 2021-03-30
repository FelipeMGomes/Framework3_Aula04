import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  soma: number = null;
  subtracao: number = null;
  multiplicacao: number = null;
  divisao: number = null;


  constructor() { }

  ngOnInit(): void {
  }

  public exec(): void{

    const num1: number = parseFloat(prompt('informe o primeiro numero'));
    const num2: number = parseFloat(prompt('informe o segundo numero'));

    this.soma = num1 + num2;
    this.subtracao = num1 - num2;
    this.multiplicacao = num1 * num2;
    this.divisao = num1 / num2;
    

    alert('soma: ' + this.soma);
    alert('subtracao ' + this.subtracao);
    alert('multiplicacao: ' + this.multiplicacao);
    alert('divisao: ' + this.divisao);


  }

}
