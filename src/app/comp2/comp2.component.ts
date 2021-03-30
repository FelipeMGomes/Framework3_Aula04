import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  x1: number = null;
  x2: number = null;


  constructor() { }

  ngOnInit(): void {
  }

  public exec(): void{

    const a: number = parseFloat(prompt('informe o valor de "a"'));
    const b: number = parseFloat(prompt('informe o valor de "b"'));
    const c: number = parseFloat(prompt('informe o valor de "c"'));

    const delta = (b * b) - 4 * a * c;

    this.x1 = (- b + Math.sqrt(delta)) / 2 * a;
    this.x2 = (- b - Math.sqrt(delta)) / 2 * a;
    

    alert('valor x1: '+ this.x1);
    alert('valor x2: '+ this.x2);

  }

}
