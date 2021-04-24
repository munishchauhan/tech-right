import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentRoutingModule } from "./student-routing.module";

@NgModule({
    declarations: [
        StudentAddComponent,
        StudentDetailComponent,
        StudentListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StudentRoutingModule
    ],
    exports: [],
    providers: [],
})
export class StudentModule {

}