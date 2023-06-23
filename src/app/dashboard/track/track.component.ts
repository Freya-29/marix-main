import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
       this.http.get('http://10.62.0.60:3000/api/campaigns').subscribe(data => {
        console.log(data);
       })
  }
}
