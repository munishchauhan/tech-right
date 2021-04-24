import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { ListEmployeeComponent } from "./list-employee/list-employee.component";

const routes: Routes = [
    { path: '', component: ListEmployeeComponent },
    { path: 'add', component: EmployeeAddComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmployeeRoutingModule {

}