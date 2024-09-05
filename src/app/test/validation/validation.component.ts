import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  validationForm:any;
  wordErrorValue = '';
  getdata: any;
  wordError = false;
  getdata2: any;
  getdata3: any;
  wordErrorvalue2 = '';
  wordError2 = false;
  wordErrorvalue3 = '';
  wordError3 = false;



  constructor(private formBuilder: FormBuilder){
    
    this.validationForm = this.formBuilder.group({
      searchnameFC: '',
      searchnumberFC: '',
      searchemailFC: ''

    });
  }

  
  submitForm(){
    this.getdata = this.validationForm.get('searchnameFC').value;
    this.getdata2 = this.validationForm.get('searchnumberFC').value;
    this.getdata3 = this.validationForm.get('searchemailFC').value;

    if(this.getdata == ''){
      this.wordError = true;
      this.wordErrorValue = 'Please fill this field with name.';
    } else{
      this.wordError = false;
      this.wordErrorValue = '';
    }

    if(this.getdata2 == ''){
      this.wordError2 = true;
      this.wordErrorvalue2 = 'Please fill this field with number.';
    } else{
      this.wordError2 = false;
      this.wordErrorvalue2 = '';
    }


    if(this.getdata3 == ''){
      this.wordError3 = true;
      this.wordErrorvalue3 = 'Please fill this field with email.';
    } else{
      this.wordError3 = false;
      this.wordErrorvalue3 = '';
    }

  }
}
