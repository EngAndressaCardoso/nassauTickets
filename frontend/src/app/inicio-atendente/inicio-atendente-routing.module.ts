import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAtendentePage } from './inicio-atendente.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAtendentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAtendentePageRoutingModule {}
