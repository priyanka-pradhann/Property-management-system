import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-get-words',
  templateUrl: './get-words.component.html',
  styleUrls: ['./get-words.component.css']
})
export class GetWordsComponent {

  dictionaryForm: any; getWordResponse: any;

  wordArray: any; wordMeaningArray: any;

  searchVal: any;

  wordErrorValue = ''; wordError = false;

  constructor(private formBuilder: FormBuilder, private testService: TestService){
    
    this.dictionaryForm = this.formBuilder.group({
      searchWordFC: '',
      searchWordTestFC: ''
    });



  }

  ngOnInit(){   
    
    this.searchWord();
   }

  async searchWord(){

    this.getWordResponse = await this.testService.getWordsFromDictionaryAPIData(this.searchVal);
 console.log(this.getWordResponse);
    if(!this.getWordResponse.error) {
      this.wordArray = this.getWordResponse;
    }


    this.searchVal = this.dictionaryForm.get('searchWordFC').value;

    alert(this.dictionaryForm.get('searchWordTestFC').value);

    if(this.searchVal != null){
      this.searchVal = this.searchVal.trim();
    } else{
      this.searchVal = '';
    }

    if(this.searchVal == ''){
      this.wordError = true;
      this.wordErrorValue = 'Please enter any word to search.';
    } else{
      this.wordError = false;
      this.wordErrorValue = '';

      this.wordArray = [];

      this.getWordResponse = await this.testService.getWordsFromDictionaryAPIData(this.searchVal);

      if(!this.getWordResponse.error) {
        this.wordArray = this.getWordResponse;
      }

      if(this.getWordResponse.error) {
        alert(this.getWordResponse.error.message);
      }
    }

  }

  handleSearchChange(event: any){
    if(event != ''){
      this.wordError = false;
      this.wordErrorValue = '';
    }
  }

  resetForm(){
    this.dictionaryForm = this.formBuilder.group({
      searchWordFC: ''
    });

    this.wordError = false;
    this.wordErrorValue = '';

    this.wordArray = [];
  }

    

}
