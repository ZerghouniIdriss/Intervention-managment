import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clinique } from '../../clinique/clinique.interface';
import { Intervention } from '../intervention.interface';

@Component({
  selector: 'app-intervention-card',
  templateUrl: './intervention-card.component.html',
  styleUrls: ['./intervention-card.component.css']
})


export class InterventionCardComponent implements OnInit {

  @Input() item: Intervention;
  @Input() cliniqueList: Clinique[];

  @Output() editEmitter = new EventEmitter<Intervention>();
  @Output() deleteEmitter = new EventEmitter<Intervention>();

  @Input() showAction: boolean=true;

  
  constructor() { }

  ngOnInit(): void {
  }

  onEditItem(value: Intervention) {
    this.editEmitter.emit(value);
  }

  onDeleteItem(index) {
    this.deleteEmitter.emit(index);
  }

  getCliniqueNamebyId(id) {
    if (this.cliniqueList) {
    return this.cliniqueList.find(x => x.id==id).name;
    }
  }
}
