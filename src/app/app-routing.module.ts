import { BasesFormComponent } from './bases/bases-form/bases-form.component';
import { SurvivorsDocumentComponent } from './survivors/survivors-document/survivors-document.component';
import { SurvivorsFormComponent } from './survivors/survivors-form/survivors-form.component';
import { SurvivorsListComponent } from './survivors/survivors-list/survivors-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesListComponent } from './bases/bases-list/bases-list.component';

const routes: Routes = [
  { path: 'districts',            component: BasesListComponent         },
  { path: 'survivors',            component: SurvivorsListComponent     },
  { path: 'survivors/new',        component: SurvivorsFormComponent     },
  { path: 'survivors/edit/:id',   component: SurvivorsFormComponent     },
  { path: 'survivors/:id',        component: SurvivorsDocumentComponent },

  //bases
  { path: 'districts/new',       component: BasesFormComponent          },
  { path: 'districts/edit/:id',  component: BasesFormComponent          },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
