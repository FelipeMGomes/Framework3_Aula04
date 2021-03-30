import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  imc: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  public exec(): void{
    
    const peso: number = parseFloat(prompt('informe o seu peso: '));
    const altura: number = parseFloat(prompt('informe o sua altura: '));

    this.imc = peso / (altura * altura);

    alert('Seu indice IMC é: ' + this.imc.toFixed(2))
  }

}
