import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-get-colour',
  templateUrl: './get-colour.component.html',
  styleUrls: ['./get-colour.component.css']
})
export class GetColourComponent {
  getcolourForm:any;
  myclasses: any;
  getcolour: any;
  hidecolour: any;
  myclass: any;
  myclass2: any;
  myclass3: any;
  
  




  constructor(private formBuilder: FormBuilder){
    this.getcolourForm = this.formBuilder.group({
      searchcolour: '',
      removecolor: '',

    });

  }
  submitcolour(){
    this.getcolour = this.getcolourForm.get('searchcolour').value;
    if(this.getcolour == 'green'){
      this.myclasses = 'green'
    }
    if(this.getcolour == 'blue'){
      this.myclasses = 'blue'
    }
    if(this.getcolour == 'yellow'){
      this.myclasses = 'yellow'
    }
    if(this.getcolour == 'red'){
      this.myclasses = 'red'
    }
    if(this.getcolour == 'purple'){
      this.myclasses = 'purple'
    }


  }
  submitbtn(){
    this.hidecolour = this.getcolourForm.get('removecolor').value;
    if(this.hidecolour == 'orange'){
      this.myclass = 'hide'
    }
    if(this.hidecolour == 'lilac'){
      this.myclass2 = 'hide'
    }
    if(this.hidecolour == 'pink'){
      this.myclass3 = 'hide'
    }

  }
}
