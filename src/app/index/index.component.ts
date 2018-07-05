import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  array1 = [];
  array2 = [];
  array3 = [];
  array4 = [];
  sum = 5;
  scrollDistance = 0.02;
  arrI = 1;
  constructor() {
    this.appendItems();
    this.appendItems();
    this.appendItems();
   }

  ngOnInit() {
  }

  addItems( _method) {
    for (let i = 0; i < 5; ++i) {
      switch(this.arrI)
      {
        case 1:
        this.array1[_method](this.randomNumber()); 
        break;
        case 2:
        this.array2[_method](this.randomNumber()); 
        break;
        case 3:
        this.array3[_method](this.randomNumber()); 
        break;
        default:
        this.array4[_method](this.randomNumber()); 
        break;
      }
      this.changeArray();
    }
  }
  
  appendItems() {
    this.addItems('push');
  }

  changeArray(){
    if(this.arrI!==4)
      this.arrI++;
      else this.arrI = 1;
  }
  

  onScrollDown () {

    // add another 20 items
    this.sum += 5;
    this.appendItems();
    
  }

  randomNumber(){
    return Math.floor((Math.random() * 30) + 1);
  }
  
 
  generateWord() {
    return 'a';
  }

}
