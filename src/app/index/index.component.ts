import { Component, OnInit } from '@angular/core';
import { IdolsService } from "../_services/idol.service";
import { Idol } from "../_model/idol.model";

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
  page = 1;
  scrollDistance = 0.02;
  arrI = 1;

  constructor(private idolsService : IdolsService) {
    this.appendItems();
   }

  ngOnInit() {
  }

  addItems( _method) {
    this.idolsService.getLatestIdols(this.page)
        .then(arr => {          
          for (let i = 0; i < arr.length; ++i) {     
            switch(this.arrI)
            {
              case 1:
              this.array1[_method](arr[i]); 
              break;
              case 2:
              this.array2[_method](arr[i]); 
              break;
              case 3:
              this.array3[_method](arr[i]); 
              break;
              default:
              this.array4[_method](arr[i]); 
              break;
            }
            this.changeArray();
          }
        }
        );
    
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
    this.page ++;
    this.appendItems();
    
  }

  randomNumber(){
    return Math.floor((Math.random() * 30) + 1);
  }
  
 
  generateWord() {
    return 'a';
  }

}
