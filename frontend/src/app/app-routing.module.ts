import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'emitir-senha',
    loadChildren: () => import('./emitir-senha/emitir-senha.module').then( m => m.EmitirSenhaPageModule)
  },
  {
    path: 'login-atendente',
    loadChildren: () => import('./login-atendente/login-atendente.module').then( m => m.LoginAtendentePageModule)
  },
  {
    path: 'inicio-atendente',
    loadChildren: () => import('./inicio-atendente/inicio-atendente.module').then( m => m.InicioAtendentePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module')
        .then(m => m.TabsPageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'auditoria',
    loadChildren: () => import('./auditoria/auditoria.module').then( m => m.AuditoriaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
