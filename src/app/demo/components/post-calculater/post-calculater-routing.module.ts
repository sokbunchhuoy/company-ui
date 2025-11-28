import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([

        { path: 'p-calculator', data: { breadcrumb: 'Calculator' }, loadChildren: () => import('./p-calculater/p-calculater.module').then(m => m.PCalculaterModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
  exports: [RouterModule]
})
export class PostCalculaterRoutingModule { }
