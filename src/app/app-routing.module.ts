import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: "", redirectTo: "/employees", pathMatch: "full"},
  {path: "employees", component: EmployeeListComponent, children: [
    {path: "overview", component: EmployeeOverviewComponent},
    {path: "contact", component: ContactComponent}
  ]},
  {path: "tests", component: TestComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
