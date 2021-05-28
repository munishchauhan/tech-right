import { CommonModule } from '@angular/common';
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
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EmployeeRoutingModule

    ],
    exports: [],
    providers: []
})
export class EmployeeModule {

}