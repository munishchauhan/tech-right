import { Component, OnInit } from '@angular/core';
import { Employee } from '../../_models/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor() { }

  ngOnInit(): void {
  }

}
