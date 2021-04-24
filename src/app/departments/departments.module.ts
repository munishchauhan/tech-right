import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddDeptComponent } from "./add-dept/add-dept.component";
import { DepartmentRoutingModule } from "./departments-routing.module";
import { ListDeptComponent } from "./list-dept/list-dept.component";

@NgModule({
    declarations: [
        AddDeptComponent,
        ListDeptComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        DepartmentRoutingModule
    ],
    exports: [],
    providers: [],
})
export class DepartmentModule {

}