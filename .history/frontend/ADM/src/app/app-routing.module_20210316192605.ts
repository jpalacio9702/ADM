import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
