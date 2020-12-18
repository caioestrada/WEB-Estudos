import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filme } from 'src/app/models/filme.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() filme: any;
  @Output() checkItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onCheck(){
    this.checkItem.emit(null);
  }
}
