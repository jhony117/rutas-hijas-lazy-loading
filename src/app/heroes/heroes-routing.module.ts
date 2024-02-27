import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayautPageComponent } from '../auth/pages/layaut-page/layaut-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ShearchPageComponent } from './pages/shearch-page/shearch-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';

const routes: Routes = [
  {
    //localhost:4200/heroes/
    path: '',
    component: LayautPageComponent,
    children:[
      {path : 'new-hero', component:NewPageComponent},
      {path : 'search', component:ShearchPageComponent},
      {path : 'list', component:ListPageComponent},
      {path : 'edit/:id', component:NewPageComponent},
      {path : ':id', component:HeroPageComponent}, //* los comodiens se colocan siempre al ultimo
      {path : '**', redirectTo: 'list'},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
