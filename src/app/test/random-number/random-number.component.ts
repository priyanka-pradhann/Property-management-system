import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css']
})
export class RandomNumberComponent {
  numberForm:any;
  searchVal: any;
  numberArray: any;
  getnumberResponse: any;



  constructor(private formBuilder: FormBuilder, private testService: TestService){
    
    this.numberForm = this.formBuilder.group({
      searchnumberFC: ''
    });
  }

  async searchpage(){
    this.searchVal = this.numberForm.get('searchnumberFC').value;
    this.numberArray = [];

    this.getnumberResponse = await this.testService.getnumberFromAPIData(this.searchVal);
    if(!this.getnumberResponse.error) {
      this.numberArray = this.getnumberResponse.data;
    }

    if(this.getnumberResponse.error) {
      alert(this.getnumberResponse.error.message);
    }

  }


    

}
