import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([

        { path: 'employee', data: { breadcrumb: 'Employee' }, loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
