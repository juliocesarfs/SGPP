import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survivor } from '../shared/survivor';
import { SurvivorService } from '../shared/survivor.service';

@Component({
  selector: 'app-survivors-document',
  templateUrl: './survivors-document.component.html',
  styleUrls: ['./survivors-document.component.css']
})
export class SurvivorsDocumentComponent implements OnInit {
  survivorValue: Survivor = new Survivor()

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private survivorService: SurvivorService
  ) { }

  ngOnInit(): void {
    console.log('inicialização : survivor: ',this.survivorValue);
    const id = this.activatedRoute.snapshot.params['id'];
    this.survivorService.getSurvivor(id).subscribe( (data: Survivor) =>{
      this.survivorValue = data;
    })
  }

  reportarSurvivor(id: number) {
    if (window.confirm('Deseja realmente reportar esse sobrevivente?')) {
      this.survivorService.flagSurvivor(id).subscribe( (dado) => {
        window.alert('Survivor reportado!');
        this.ngOnInit()
      }, erro => {
        console.log(erro);
      })
    }
  }
}
