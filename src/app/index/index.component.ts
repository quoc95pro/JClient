import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  array = [];
  sum = 5;
  scrollDistance = 0.1;
  
  constructor() {
    this.appendItems();
   }

  ngOnInit() {
  }

  addItems( _method) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, ' ', this.generateWord()].join(''));
      console.log(this.sum);
      
    }
  }
  
  appendItems() {
    this.addItems('push');
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
