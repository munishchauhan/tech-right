import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from '../../_models/employee.model';
import { RepositoryService } from 'src/app/_services/repository.service';


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
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private repositoryService: RepositoryService,
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
    const route = `employee/findByEmployeeId/${employeeId}`;
    this.repositoryService.getData(route).subscribe({
      next: (resp) => {
        console.log(resp);
        this.employeeForm.patchValue(resp);
      },
      error: (err) => { console.log(err) }
    });
  }

  submitForm() {

    console.log(this.employeeForm.value);
    if (this.employeeForm.invalid) {
      this.toastr.warning("Please fill all the mandatory columns");
      return;
    }

    const route = 'employee/addEmployee';
    this.repositoryService.create(route, this.employeeForm.value)
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
            this.toastr.error('Employee could not be added');
          }
        }
      );
  }

  view() {
    this.router.navigateByUrl('/employees/list');
  }

  delete() {
    const route = `employee/delete/${this.id}`
    this.repositoryService.delete(route).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => { console.log(err) }
    });
  }

  update() {
    const route = `employee/updateEmployeeDetail/${this.id}`;
    this.repositoryService.update(route, this.employeeForm.value)
      .subscribe({
        next: (resp: any) => {
          console.log(resp);
          this.toastr.success('Employee Details Updated');
          this.router.navigateByUrl('/employees/list');

        },
        error: (err: any) => {
          console.log(err);
          this.toastr.error('Employee could not be updated');
        }

      });

  }
}
