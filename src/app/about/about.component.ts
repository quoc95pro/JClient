import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdolsService } from "../_services/idol.service";
import { Idol } from "../_model/idol.model";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   idol = new Idol();
  constructor( private route: ActivatedRoute, private idolsServices : IdolsService) {
    
   }
   
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.idolsServices.getIdolById(id)
    .then(res => 
      {
        console.log(this.idol);
        this.idol = res;
        console.log(this.idol);
        
      })
  }

}
