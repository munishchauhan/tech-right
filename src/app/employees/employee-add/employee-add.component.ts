import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../_models/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee = new Employee();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: [null, Validators.required ],
      lastName: ['', Validators.required],
      hireDate: [],
      age: [],
      email: ['', Validators.required],
      deptId: [],
      isActive: [],
      pictureId: []
    });
  }

  submitForm(){
    alert('Submitted');
  }

  delete(){
    alert('Deleted');
  }

  updated(){
    alert('Updated');
  }

}
