import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {
  dataSubmitted: boolean = false;

  firstName: string = '';
  lastName: string;
  age: number;
  dt = new Date();
  dateOfBirth: any;
  // formattedDate = formatDate(this.dt, 'dd-MM-yyyy hh:mm', 'en-IN');
  // dateOfBirth: any = this.formattedDate;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    // let dt = new Date();
    // let formattedDate = formatDate(dt, 'dd-MM-yyyy', 'en-IN');
  }

  submitData() {
    this.dataSubmitted = true;
    let studentData: any;
    this.httpClient.post('http://localhost:8080/student/register', studentData)
      .subscribe(
        {
          next: resp => {

          },
          error: err => {

          }
        }
      );
  }

  reset() {
    this.firstName = this.lastName = '';
    this.age = null;
    this.dateOfBirth = null;
    this.dataSubmitted = false;
  }

}
