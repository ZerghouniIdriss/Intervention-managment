import { Component, OnInit } from '@angular/core';
import { Intervention } from '../intervention/intervention.interface';
import { InterventionService } from '../intervention/intervention.service';
interface ISelect {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  intervention_recentes: Intervention[];
  intervention_plannified: Intervention[];

  constructor(private interventionsService: InterventionService) { }

  ngOnInit(): void {
    this.interventionsService.getAll().subscribe((data: Intervention[]) => {
      this.intervention_recentes = data;
    });
    this.interventionsService.getAll().subscribe((data: Intervention[]) => {
      this.intervention_plannified = data;
    });
  }

   
}
