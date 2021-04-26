import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/_models/student.model";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {
    students: any[] = [];

    constructor( private httpClient: HttpClient) {
        // alert('From constructor');

    }

    allStudentDetails(){
            
        this.httpClient.get('http://localhost:8080/student/all')
          .subscribe(
            {
              next: (resp:Student[]) => {
                console.log(resp);
                this.students = resp;
              },
              error: err => {
                console.log(err);
              }
            }
          );

    }
    ngOnInit(): void {

        this.allStudentDetails();
        // this.students.push({ id: 1, firstName: 'Puja', lastName: 'Mazumdar' });
        // this.students.push({ id: 2, firstName: 'Ajay', lastName: 'Kumar' });
        // this.students.push({ id: 3, firstName: 'Munish', lastName: 'Kumar' });
        // this.students.push({ id: 4, firstName: 'Rajat', lastName: 'Kumar' });
        // this.students.push({ id: 5, firstName: 'Raman', lastName: 'Kumar' });

        // alert(this.students.length);
    }
}