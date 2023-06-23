import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private http : HttpClient) { }

  campaigns : [] = [];
  reviews : [] = [];
 async ngOnInit() {   
      await this.http.get('http://10.62.0.60:3000/api/campaigns').toPromise().then((data : any) => {
        console.log(data);
        this.campaigns = data.Items
        console.log(this.campaigns);
       })
      this.code();
  }

  code(){
   this.campaigns.map((ele : any) => {
   
     
   })
    
  }
}
