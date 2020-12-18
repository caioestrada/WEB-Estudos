import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-final',
  templateUrl: './card-final.component.html'
})
export class CardFinalComponent implements OnInit  {
  @Input() posicao: number = 0;
  @Input() titulo: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
