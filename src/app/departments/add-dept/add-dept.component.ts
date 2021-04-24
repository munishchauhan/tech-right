import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dept } from '../../_models/dept.model';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent implements OnInit {

  deptForm: FormGroup;
  dept!: Dept;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.deptForm = this.fb.group({
      deptName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: ['', Validators.compose([Validators.maxLength(500)])],
      empCount: ['', Validators.compose([Validators.required])]
    });
  }

  get f() {
    return this.deptForm.controls;
  }

  onSubmit(value) {
    this.dept = {
      deptName: value.deptName,
      description: value.description,
      empCount: parseInt(value.empCount) 
    };

    console.log(this.dept);
  }
}
