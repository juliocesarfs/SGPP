import { SurvivorsFormComponent } from './survivors/survivors-form/survivors-form.component';
import { SurvivorsListComponent } from './survivors/survivors-list/survivors-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',             component: SurvivorsListComponent },
  { path: 'survivor/new', component: SurvivorsFormComponent},
  { path: 'survivor/:id', component: SurvivorsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
