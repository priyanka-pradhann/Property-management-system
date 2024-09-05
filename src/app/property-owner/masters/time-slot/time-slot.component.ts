import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.css']
})
export class TimeSlotComponent {
  closeResult = '';

  successval:any='successeeeee';
  click:any=false;

  timeSlotArray: any;
  apiResponse: any;

  currencyArray:any;




  message:any='';
  currencyapiResponse: any;
  cryptocurrency:any;

  constructor(private modalService: NgbModal, private apiService: ApiService, public activatedRoute:ActivatedRoute, public router:Router) {

  }

  ngOnInit(){
    this.getTimeSlotData();
    this.getcurrency(this.cryptocurrency);

  }

  async getTimeSlotData(){

    this.apiResponse = await this.apiService.getTimeSlotData();

    if(this.apiResponse){
      if(this.apiResponse.time_slot != null && this.apiResponse.time_slot != 'undefined'){
        this.timeSlotArray = this.apiResponse.time_slot;
      }
    }
  }

  async getnewTimeSlotData(){

    this.apiResponse = await this.apiService.getUpdatedTimeSlotData();

    if(this.apiResponse){
      if(this.apiResponse.time_slot != null && this.apiResponse.time_slot != 'undefined'){
        this.timeSlotArray = this.apiResponse.time_slot;
      }
    }
  }

  async getcurrency(currency:any){

    this.currencyapiResponse = await this.apiService.getcurrencyData(currency);

    if(this.currencyapiResponse){
      if(this.currencyapiResponse != null && this.currencyapiResponse != 'undefined'){
        this.currencyArray = this.currencyapiResponse;

        console.log(this.currencyArray)
      }
    }
  }


  checkActive(){
    this.message="Please fill all the details.";
  }
  checkactive(){
    console.log("Function works");
    this.click=true;
  }


  openModal(content: any){

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason: any) {
    throw new Error('Method not implemented.');
  }

  async editData(service:String,date:any,hour:any,totime:any){

    console.log(service);
    this.router.navigate(['/edit-timeslot', { servicetype: service,number: date,hourtype:hour,timetype:totime}]);
  }
}
