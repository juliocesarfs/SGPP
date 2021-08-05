import { Component, OnInit } from '@angular/core';

import { SurvivorService } from '../shared/survivor.service';
import { Survivor } from '../shared/survivor';

@Component({
  selector: 'app-survivors-list',
  templateUrl: './survivors-list.component.html',
  styleUrls: ['./survivors-list.component.css']
})
export class SurvivorsListComponent implements OnInit {
  survivors: Survivor[] = []

  constructor(private survivorService: SurvivorService) { }

  ngOnInit(): void {
    this.buscarDAdosSurvivors();
  }

  buscarDAdosSurvivors() {
    this.survivorService.getSurvivors().subscribe(result => {
      this.survivors = result;
      console.log('Dados retornados pelo servidor', result);
    },
      erro => {
        console.error(erro);
      }
    );
  }

}
