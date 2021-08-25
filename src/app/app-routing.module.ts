import { DistrictsFormComponent } from './districts/districts-form/districts-form.component';
import { SurvivorsDocumentComponent } from './survivors/survivors-document/survivors-document.component';
import { SurvivorsFormComponent } from './survivors/survivors-form/survivors-form.component';
import { SurvivorsListComponent } from './survivors/survivors-list/survivors-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrictsListComponent } from './districts/districts-list/districts-list.component';

const routes: Routes = [
  { path: 'districts',            component: DistrictsListComponent         },
  { path: 'survivors',            component: SurvivorsListComponent     },
  { path: 'survivors/new',        component: SurvivorsFormComponent     },
  { path: 'survivors/edit/:id',   component: SurvivorsFormComponent     },
  { path: 'survivors/:id',        component: SurvivorsDocumentComponent },

  //districts
  { path: 'districts/new',       component: DistrictsFormComponent          },
  { path: 'districts/edit/:id',  component: DistrictsFormComponent          },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
