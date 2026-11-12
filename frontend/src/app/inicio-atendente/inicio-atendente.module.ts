import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { InicioAtendentePageRoutingModule } from './inicio-atendente-routing.module';

import { InicioAtendentePage } from './inicio-atendente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAtendentePageRoutingModule
  ],
  declarations: [InicioAtendentePage]
})
export class InicioAtendentePageModule {}
