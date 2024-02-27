import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { ShearchPageComponent } from './pages/shearch-page/shearch-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayaoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    ShearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
  ]
})
export class HeroesModule { }
