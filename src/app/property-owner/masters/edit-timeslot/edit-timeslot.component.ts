import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-edit-timeslot',
  templateUrl: './edit-timeslot.component.html',
  styleUrls: ['./edit-timeslot.component.css']
})
export class EditTimeslotComponent {
  retrivedData:any;
  myservice:any;
  mytimeslot:any;
  myhour:any;
  mytimeslot2:any;

  constructor( private apiService: ApiService, public activatedRoute:ActivatedRoute, public router:Router){
    this.retrivedData = this.activatedRoute.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.myservice = params['servicetype'];

      this.mytimeslot = params['number'];

      this.myhour = params['hourtype'];

      this.mytimeslot2 = params['timetype'];

  
      console.log("myservice"+this.myservice);
  
    });
  }
  

}
