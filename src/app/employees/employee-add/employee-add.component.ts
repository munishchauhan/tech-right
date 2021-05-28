import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  employeeForm: FormGroup;
  employee: Employee = new Employee();
  id = 0;
  constructor(private fb: FormBuilder,
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'] || 0;

    if (this.id > 0) // EDIT MODE
    {
      this.getDetails(this.id);
    }
    this.employeeForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: ['', Validators.required],
      hireDate: [],
      age: [],
      email: ['', Validators.required],
      department: [],
      status: [],
      pictureId: []
    });
  }

  getDetails(employeeId) {
    this.httpClient.get('http://localhost:8080/employee/findByEmployeeId/' + employeeId)
      .subscribe({
        next: (resp) => { console.log(resp);
          this.employeeForm.patchValue(resp);
        },
        error: (err) => {console.log(err) }
      });
  }

  submitForm() {

    console.log(this.employeeForm.value);
    if(this.employeeForm.invalid){
      this.toastr.warning("Please fill all the mandatory columns");
      return;
      
    }
    // return;
    this.httpClient.post(
      'http://localhost:8080/employee/addEmployee',
      this.employeeForm.value
      //this.generateHeaders()
    )
      .subscribe(
        {
          next: (resp: any) => {
            console.log(resp);
            if (resp.empRequest.studentId > 0) {
              this.toastr.success('Employee added');
              this.router.navigateByUrl('/employees/list');
            } else {
              this.toastr.error('Employee could not be added');
            }
          },
          error: err => {
            console.log(err);
            //this.toastr.error('Student could not be added');
          }
        }
      );
  }

  view() {
    this.router.navigateByUrl('/employees/list');
  
  }

  delete() {
    alert('Deleted');
  }

  update() {
    this.httpClient.put('http://localhost:8080/employee/updateEmployeeDetail/'+this.id,
    this.employeeForm.value)
    .subscribe({
        next:(resp:any) =>{
          console.log(resp);
          this.toastr.success('Employee Details Updated');
          this.router.navigateByUrl('/employees/list');

        },
        error:(err:any) => {
            console.log(err);
            this.toastr.error('Employee could not be updated');
          }   

    });
 
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
