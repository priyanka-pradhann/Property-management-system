import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  getAPIResponse: any;
  passAPIResponse: any;

  apikey="95299254-0c4e-469a-ae40-6b14e3de3fd7";


  constructor(private httpClient: HttpClient) { }

  getWordsFromDictionaryAPIData(word: string){
    
    const urlStr = 'https://vedantametalbazaar.com/api/public/api/technology_bazaar';

    let headers = new HttpHeaders({
      Apikey: this.apikey,
    });



      return new Promise((resolve, reject) => {
       this.getAPIResponse = this.httpClient.get(urlStr,{headers:headers});
      
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


  getpagesFrompageAPIData(page: Number){
    
    const urlStr = 'https://reqres.in/api/users?page=' + page;

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

  getnumberFromAPIData(key: Number){
    
    const urlStr = 'https://fakerapi.it/api/v1/credit_cards?_quantity=' + key;

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
  getdatafromemetalbaazarAPI(){
    
    const urlStr = 'https://vedantametalbazaar.com/api/public/api/technology_bazaar';

    let headers = new HttpHeaders({
      Apikey: this.apikey,
    });

      return new Promise((resolve, reject) => {
       this.getAPIResponse = this.httpClient.get(urlStr,{headers:headers});
      
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
  viewdatafromemetalbaazarAPI(slug:any){
    
    const urlStr = 'https://vedantametalbazaar.com/api/public/api/technology_bazaar_landing_details?slug='+slug;

    let headers = new HttpHeaders({
      Apikey: this.apikey,
    });

      return new Promise((resolve, reject) => {
       this.getAPIResponse = this.httpClient.get(urlStr,{headers:headers});
      
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

