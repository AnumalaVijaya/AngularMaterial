import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {
  public myForm!: FormGroup;
  constructor() { }
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  ngOnInit() {
    
  this.myForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(32) ,Validators.pattern(this.namepattern)]),
  email:new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
  password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
  gender:new FormControl(''),
  dateofBirth:new FormControl(''),
  mobileno: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  skill:new FormControl('')
  });


  }
  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
    }
}
