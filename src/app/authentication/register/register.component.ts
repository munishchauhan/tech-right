import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  //registerForm2: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   name : new FormControl(''),
    //   surname : new FormControl(''),
    //   phone : new FormControl(''),
    //   address : new FormControl(''),
    // });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.compose(
        [ Validators.required, 
          Validators.minLength(10),
          Validators.maxLength(13)
        ])],
      address: [''],
      emailAddress:['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(150)
      ])]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitForm(f) {
    if (this.registerForm.invalid) {
      alert('Please fill all values');
      return;
    }
    console.log(f);
  }

}
