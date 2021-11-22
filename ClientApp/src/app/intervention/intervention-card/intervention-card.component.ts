import { Component, Input, OnInit } from '@angular/core';
import { Intervention } from '../intervention.interface';

@Component({
  selector: 'app-intervention-card',
  templateUrl: './intervention-card.component.html',
  styleUrls: ['./intervention-card.component.scss']
})


export class InterventionCardComponent implements OnInit {

  @Input() item :Intervention ;

  constructor() { }

  ngOnInit(): void {
  }

}
