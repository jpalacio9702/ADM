import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PageNoFoundComponent } from './pages/page-no-found/page-no-found.component';
import { PrincipalComponent }  from './pages/principal/principal.component' 
import { VehiculoComponent }  from './pages/vehiculo/vehiculo.component' 
import { TramaComponent }  from './pages/trama/trama.component' 


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },

  {
  	path:'home',
  	component:HomeComponent
  },
  {
    path:'vehiculo',
    component:VehiculoComponent
  },
  {
    path:'trama',
    component:TramaComponent
  },

  {
    path: '**',
    component: PageNoFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
