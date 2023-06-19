import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  departmentData:any;
  param: any;
  allempcurrm: any = [];
  constructor(private route:ActivatedRoute, private http: HttpClient, private location:Location) { }

  ngOnInit(): void {
    console.log(history.state);
    this.param = history.state.depid;
    // this.route.queryParams.subscribe((params:any) => {
    //   this.param = params['depid']
      
      
    // })
    console.log(this.param);
    this.http.get('http://10.62.0.60:3000/api/campaigns').toPromise().then((data: any) => {
      console.log(data['Items']);
      data['Items'].forEach((element: any) => {
        if(element['created']){
          var abc = element['created'];
          if(history.state.m === abc.slice(4,7) && history.state.y === abc.slice(11,15)){
            this.allempcurrm.push(element['for'])
          }
          
        }
        
      });
      console.log(this.allempcurrm);
      try{
      this.http.get(`http://10.62.0.60:3000/api/employees/department/${this.param}`).toPromise().then((data:any) => {
        // this.departmentData = data
        console.log(data);
        this.departmentData = data.filter((item: any) => this.allempcurrm.indexOf(item.id) !== -1);

        console.log(this.departmentData);
        
      })
     } catch{
  
     }
      // this.allempcurrm = [];
    }).catch((err) => {
      console.log(err);
    })
    
  }

  goBack(){
    this.location.back();
  }

}
