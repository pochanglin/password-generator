import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  isUseLetters = false;
  isUseNumbers = false;
  isUseSymbols = false;
  password = '';

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.isUseLetters){
      validChars += letters;
    }

    if(this.isUseNumbers){
      validChars += numbers;
    }

    if(this.isUseSymbols){
      validChars += symbols;
    }

    let generatedPwd = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPwd += validChars[index];
    }
    this.password = generatedPwd;
  }

  onChangeUseLetters(){
    this.isUseLetters = !this.isUseLetters;
  }

  onChangeUseNumbers(){
    this.isUseNumbers = !this.isUseNumbers;
  }

  onChangeUseSymbols(){
    this.isUseSymbols = !this.isUseSymbols;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
}
