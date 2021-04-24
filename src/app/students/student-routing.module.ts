import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentListComponent } from "./student-list/student-list.component";

const routes: Routes = [
    { path: '', component: StudentListComponent },
    { path: 'add', component: StudentAddComponent },
    { path: 'edit/:id', component: StudentAddComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {

}