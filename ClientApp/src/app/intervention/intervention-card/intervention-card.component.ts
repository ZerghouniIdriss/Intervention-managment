import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Intervention } from '../intervention.interface';

@Component({
  selector: 'app-intervention-card',
  templateUrl: './intervention-card.component.html',
  styleUrls: ['./intervention-card.component.scss']
})


export class InterventionCardComponent implements OnInit {

  @Input() item: Intervention;
  @Output() editEmitter = new EventEmitter<Intervention>();
  @Output() deleteEmitter = new EventEmitter<Intervention>();


  constructor() { }

  ngOnInit(): void {
  }

  onEditItem(value: Intervention) {
    this.editEmitter.emit(value);
  }

  onDeleteItem(index) {
    this.deleteEmitter.emit(index);
  }
}
