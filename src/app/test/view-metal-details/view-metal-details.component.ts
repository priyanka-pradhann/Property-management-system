import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test/test.service';


@Component({
  selector: 'app-view-metal-details',
  templateUrl: './view-metal-details.component.html',
  styleUrls: ['./view-metal-details.component.css']
})
export class ViewMetalDetailsComponent {
  retrivedData: any;
  slug: any;
  pageArray: any;
  getpageResponse: any;
  ngOnInit(){
    this.viewpage();
  }
  constructor( private testService: TestService , public activatedRoute:ActivatedRoute, public router:Router){
    this.retrivedData = this.activatedRoute.params.subscribe(params => {
      this.slug = params['slug']

    });
    }
    async viewpage(){
      
      this.getpageResponse = await this.testService.viewdatafromemetalbaazarAPI(this.slug);
      if(!this.getpageResponse.error) {
        this.pageArray = this.getpageResponse.data;
      }
  
      if(this.getpageResponse.error) {
        alert(this.getpageResponse.error.message);
  
    }
    }
}
