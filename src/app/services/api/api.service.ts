import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getAPIResponse: any;
  passAPIResponse: any;


  constructor(private httpClient: HttpClient) { }

  getTimeSlotData(){

    const urlStr = './assets/json/time_slot.json';

      return new Promise((resolve, reject) => {
       this.getAPIResponse = this.httpClient.get(urlStr);
      
        this.getAPIResponse.subscribe(
         (data: any) => {
          this.passAPIResponse = data;
          resolve(this.passAPIResponse);
       },
      (error: any) => {
        resolve(error);
       }
      );
    });
  }

  getUpdatedTimeSlotData(){

    const urlStr = './assets/json/time_slot2.json';

      return new Promise((resolve, reject) => {
       this.getAPIResponse = this.httpClient.get(urlStr);
      
        this.getAPIResponse.subscribe(
         (data: any) => {
          this.passAPIResponse = data;
          resolve(this.passAPIResponse);
       },
      (error: any) => {
        resolve(error);
       }
      );
    });
  }

  getcurrencyData(currencyprice:any){

    const urlStr = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyprice}`;

      return new Promise((resolve, reject) => {
       this.getAPIResponse = this.httpClient.get(urlStr);
      
        this.getAPIResponse.subscribe(
         (data: any) => {
          this.passAPIResponse = data;
          resolve(this.passAPIResponse);
       },
      (error: any) => {
        resolve(error);
       }
      );
    });
  }

}
