import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [
  {
    path:"",
    component: CrearAutosComponent,
    pathMatch: 'full'
  },
  {
    path:"listar",
    component: ListarAutosComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
