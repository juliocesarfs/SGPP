import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survivor } from '../shared/survivor';
import { SurvivorService } from '../shared/survivor.service';

@Component({
  selector: 'app-survivor-form',
  templateUrl: './survivors-form.component.html',
  styleUrls: ['./survivors-form.component.css']
})
export class SurvivorsFormComponent implements OnInit {
  survivorValue: Survivor = new Survivor();
  survivors: Survivor[] = []
  title: string = 'Novo Sobrevivente';


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private survivorService: SurvivorService) { }

  ngOnInit(): void {
    console.log('inicialização : survivor: ',this.survivorValue);
    const id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.survivorService.getSurvivor(id).subscribe( (data: Survivor) =>{
        console.log('survivor get, ',data);
        this.survivorValue = data;
        this.title = 'Alterando sobrevivente';
      })
    }
  }

  salvarSurvivor(){
    if(window.confirm('Salvar dados?')){
      this.survivorService.salvarSurvivor(this.survivorValue).subscribe ( data => {
        this.router.navigate([''])
      }, erro => {
          console.log('erro salvarSurvivor', erro);
          window.alert(erro);
      })
    }
  }

  removerSurvivor(id:number){
    if(window.confirm('Confirmar Remoção?')){
      this.survivorService.apagarSurvivor(id).subscribe( (dado) => {
        this.buscarDAdosSurvivors();
        window.alert('Survivor Removido!');
        this.router.navigate([''])
      }, erro => {
        window.alert(erro);
      })
    }
  }

  private buscarDAdosSurvivors() {
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
