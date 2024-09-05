import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-metal-baazar',
  templateUrl: './metal-baazar.component.html',
  styleUrls: ['./metal-baazar.component.css']
})
export class MetalBaazarComponent {
  pageForm: any; 
  searchVal:any = 1;
  pageArray:any;
  getpageResponse: any;
  myclass:any = 'green';
  myclass2: any;
  mySwitchState: any = 'On';
  mystate: any;
  myval: string = 'On';
 
  

  constructor(private formBuilder: FormBuilder, private testService: TestService, public activatedRoute:ActivatedRoute, public router:Router){
    
    this.pageForm = this.formBuilder.group({
      searchpagesFC: ''
    });
  }
  ngOnInit(){   
    
   this.searchpage();
  }



  async searchpage(){

    debugger

console.log("called 1");

    if(this.mySwitchState == 'Off'){
      this.mystate = "No internet";
    }else{
    this.searchVal = this.pageForm.get('searchpagesFC').value;
    // alert(this.pageForm.get('searchpagesFC').value);
    this.pageArray = [];
    if(this.mySwitchState == 'On'){
    this.getpageResponse = await this.testService.getdatafromemetalbaazarAPI();
    if(!this.getpageResponse.error) {
      this.pageArray = this.getpageResponse.data;
    }

    if(this.getpageResponse.error) {
      alert(this.getpageResponse.error.message);
    }
  }
  }
  }
  Onclick(myval:any){

    debugger
    
    if(this.myval == 'On'){
      this.myclass = 'green';
      this.myclass2 = 'gray';
      localStorage.setItem('swithcState', 'On');
      this.mySwitchState=localStorage.getItem('swithcState');
    }
  else if
    (this.myval == 'Off'){
    this.myclass2 = 'red';
    this.myclass = 'gray';
    localStorage.setItem('swithcState', 'Off');
    this.mySwitchState=localStorage.getItem('swithcState');
    }
  }
  
  viewData(slugdetails:any){
    console.log(slugdetails)
  
    this.router.navigate(['/view-metalbaazar', {slug:slugdetails}]);
  }
}






