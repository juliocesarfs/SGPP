import { DistrictService } from './../shared/district.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { District } from '../shared/district';

@Component({
  selector: 'app-districts-form',
  templateUrl: './districts-form.component.html',
  styleUrls: ['./districts-form.component.css']
})
export class DistrictsFormComponent implements OnInit {
  districtValue: District = new District();
  districts: District[] = []
  title: string = 'Criando Distrito'

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private districtService: DistrictService
  ) { }

  ngOnInit(): void {
    console.log('incialização : district: ', this.districtValue)
    const id = this.ActivatedRoute.snapshot.params['id']
    console.log(id)
    if (id) {
      this.districtService.getDistrict(id).subscribe( (data: District) => {
        console.log('district get, ', data)
        this.districtValue = data
        this.title = 'Alterando distrito'
      })
    }
    else
      console.log('nao existe')
  }

  saveDistrict() {
    if (window.confirm('Salvar dados?')) {
      this.districtService.salvarDistrict(this.districtValue).subscribe( data => {
        this.router.navigate(['/districts'])
      }, erro => {
        console.log('erro salvarDistrict', erro)
        window.alert(erro)
      })
    }
  }

  removerDistrict(id: number) {
    if(window.confirm('Confirmar Remoção?')){
      this.districtService.apagarDistrict(id).subscribe( (dado) => {
        this.buscarDAdosDistricts();
        window.alert('District Removido!');
        this.router.navigate(['/districts'])
      }, erro => {
        window.alert(erro);
      })
    }
  }

  private buscarDAdosDistricts() {
    this.districtService.getDistricts().subscribe(result => {
      this.districts = result;
      console.log('Dados retornados pelo servidor', result);
    },
      erro => {
        console.error(erro);
      }
    );
  }

}
