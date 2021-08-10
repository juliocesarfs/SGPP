import { BaseService } from './../shared/base.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Base } from '../shared/base';

@Component({
  selector: 'app-bases-form',
  templateUrl: './bases-form.component.html',
  styleUrls: ['./bases-form.component.css']
})
export class BasesFormComponent implements OnInit {
  baseValue: Base = new Base();
  bases: Base[] = []
  title: string = 'Criando Distrito'

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private baseService: BaseService
  ) { }

  ngOnInit(): void {
    console.log('incialização : base: ', this.baseValue)
    const id = this.ActivatedRoute.snapshot.params['id']
    console.log(id)
    if (id) {
      this.baseService.getBase(id).subscribe( (data: Base) => {
        console.log('base get, ', data)
        this.baseValue = data
        this.title = 'Alterando distrito'
      })
    }
    else
      console.log('nao existe')
  }

  saveBase() {
    if (window.confirm('Salvar dados?')) {
      this.baseService.salvarBase(this.baseValue).subscribe( data => {
        this.router.navigate(['/districts'])
      }, erro => {
        console.log('erro salvarBase', erro)
        window.alert(erro)
      })
    }
  }

  removerBase(id: number) {
    if(window.confirm('Confirmar Remoção?')){
      this.baseService.apagarBase(id).subscribe( (dado) => {
        this.buscarDAdosBases();
        window.alert('Base Removido!');
        this.router.navigate(['/districts'])
      }, erro => {
        window.alert(erro);
      })
    }
  }

  private buscarDAdosBases() {
    this.baseService.getBases().subscribe(result => {
      this.bases = result;
      console.log('Dados retornados pelo servidor', result);
    },
      erro => {
        console.error(erro);
      }
    );
  }

}
