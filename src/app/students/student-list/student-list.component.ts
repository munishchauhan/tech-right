import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {
    students: any[] = [];

    constructor() {
        // alert('From constructor');
    }

    ngOnInit(): void {
        this.students.push({ id: 1, firstName: 'Puja', lastName: 'Mazumdar' });
        this.students.push({ id: 2, firstName: 'Ajay', lastName: 'Kumar' });
        this.students.push({ id: 3, firstName: 'Munish', lastName: 'Kumar' });
        this.students.push({ id: 4, firstName: 'Rajat', lastName: 'Kumar' });
        this.students.push({ id: 5, firstName: 'Raman', lastName: 'Kumar' });

        // alert(this.students.length);
    }
}