import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { District } from '../shared/district';
import { DistrictService } from '../shared/district.service';

@Component({
  selector: 'app-districts-list',
  templateUrl: './districts-list.component.html',
  styleUrls: ['./districts-list.component.css']
})
export class DistrictsListComponent implements OnInit {
  districts: District[] = []

  constructor(
    private districtService: DistrictService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.searchDistrictData()
  }

  searchDistrictData() {
    this.districtService.getDistricts().subscribe(result => {
      this.districts = result
      console.log('Dados retornados pelo servidor', result)
    },
      erro => {
        console.error(erro)
      }
    )
  }

  routeToEdit(id: number) {
    this.router.navigate(['/districts/edit/'+id])
  }
}
