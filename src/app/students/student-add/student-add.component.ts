import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Student } from 'src/app/_models/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent implements OnInit {

  id = 0;
  dataSubmitted: boolean = false;
  student: Student = {
    age: 0,
    dateOfBirth: null,
    firstName: null,
    lastName: null
  };

  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'] || 0;

    if (this.id > 0) // EDIT MODE
    {
      this.getDetails(this.id);
    }
    // let dt = new Date();
    // let formattedDate = formatDate(dt, 'dd-MM-yyyy', 'en-IN');
  }

  // get student details
  getDetails(id) {
    this.httpClient.get(`http://localhost:8080/student/${id}`, this.generateHeaders())
      .subscribe(
        {
          next: (resp: Student) => {
            console.log(resp);
            this.student = resp;
          },
          error: err => {
            console.log(err);
          }
        }
      );
  }

  submitData() {
    this.dataSubmitted = true;
    console.log(this.student);

    if (this.id === 0) // ADD Mode
    {
      this.addStudent();
    } else { // EDIT Mode
      this.updateStudent();
    }
  }

  private updateStudent() {
    this.httpClient.put(`http://localhost:8080/student/updateStudentDetail/${this.id}`,
      this.student,
      this.generateHeaders()
    )
      .subscribe(
        {
          next: (resp: any) => {
            //console.log(resp);
            if (resp.id > 0) {
              this.toastr.success('Student added');
              this.router.navigateByUrl('/students');
            } else {
              this.toastr.error('Student could not be added');
            }
          },
          error: err => {
            // console.log(err);
            this.toastr.error('Student could not be added');
          }
        }
      );
  }

  private addStudent() {
    this.httpClient.post(
      'http://localhost:8080/student/register',
      this.student,
      this.generateHeaders()
    )
      .subscribe(
        {
          next: (resp: any) => {
            //console.log(resp);
            if (resp.id > 0) {
              this.toastr.success('Student added');
              this.router.navigateByUrl('/students');
            } else {
              this.toastr.error('Student could not be added');
            }
          },
          error: err => {
            // console.log(err);
            this.toastr.error('Student could not be added');
          }
        }
      );
  }

  reset() {
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
