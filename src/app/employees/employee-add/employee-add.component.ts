import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from '../../_models/employee.model';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  
  employeeForm : FormGroup;
  employee: Employee = new Employee();
  
  constructor(private fb:FormBuilder,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: ['', Validators.required],
      hireDate: [],
      age: [],
      email: ['', Validators.required],
      deptId: [],
      isActive: [],
      pictureId: []
    });
  }

  submitForm() {
    console.log(this.employeeForm.status);
    console.log(this.employeeForm.value);

    this.httpClient.post(
      'http://localhost:8080/employee',
      this.employeeForm.value,
      this.generateHeaders()
    )
      .subscribe(
        {
          next: (resp: any) => {
            //console.log(resp);
            if (resp.id > 0) {
              //this.toastr.success('Student added');
              //this.router.navigateByUrl('/employess');
            } else {
              //this.toastr.error('Student could not be added');
            }
          },
          error: err => {
            console.log(err);
            //this.toastr.error('Student could not be added');
          }
        }
      );
  }

  delete() {
    alert('Deleted');
  }

  update() {
    alert('Updated');
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders(
        {
          'Authorization': 'Basic YW5pOmVlZTEyMw=='
        })
    };
  }
}
