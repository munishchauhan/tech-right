import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { ListEmployeeComponent } from "./list-employee/list-employee.component";

@NgModule({
    declarations: [
        EmployeeAddComponent,
        ListEmployeeComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        EmployeeRoutingModule
    ],
    exports: [],
    providers: []
})
export class EmployeeModule {

}