import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  // employee: Employee = new Employee();
  employeeList : any;

  constructor(
    private httpClient:HttpClient,
    private toastr:ToastrService,
    private router:Router) { }

    ngOnInit(): void {
      this.getEmployeeList();
    }

    getEmployeeList(){
      this.httpClient.get(
        'http://localhost:8080/employee/getEmployeeDetail'    
      )
        .subscribe(
          {
            next: (resp: any) => {
              console.log(resp);
              this.employeeList = resp;
              console.log(this.employeeList)
             },
            error: err => {
              console.log(err);
              //this.toastr.error('Student could not be added');
            }
          }
        );
    
    }
}
