import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddDeptComponent } from "./add-dept/add-dept.component";
import { ListDeptComponent } from "./list-dept/list-dept.component";

const routes: Routes = [
    { path: '', component: ListDeptComponent },
    { path: 'add', component: AddDeptComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentRoutingModule {

}