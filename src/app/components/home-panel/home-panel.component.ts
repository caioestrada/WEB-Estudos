import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-panel',
  templateUrl: './home-panel.component.html'
})
export class HomePanelComponent implements OnInit  {
  @Input() titulo: string = "";
  @Input() descricao: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
