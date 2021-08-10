import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Base } from '../shared/base';
import { BaseService } from '../shared/base.service';

@Component({
  selector: 'app-bases-list',
  templateUrl: './bases-list.component.html',
  styleUrls: ['./bases-list.component.css']
})
export class BasesListComponent implements OnInit {
  bases: Base[] = []

  constructor(
    private baseService: BaseService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.searchDistrictData()
  }

  searchDistrictData() {
    this.baseService.getBases().subscribe(result => {
      this.bases = result
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
