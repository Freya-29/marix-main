import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-track-campaign',
  templateUrl: './track-campaign.component.html',
  styleUrls: ['./track-campaign.component.scss']
})
export class TrackCampaignComponent implements OnInit {

  constructor(private http : HttpClient) { }
  
  campaignList : [] =  [];
  employeeList: Employee[] = [] ;




  async ngOnInit() {
    
  // //  getting the campaign
  //   await this.http.get('http://10.62.0.60:3000/api/campaigns').toPromise().then((data : any) => {
  //     this.campaignList = data.Items
  //     console.log(this.campaignList);
  //   })
  // //  getting employee from campaign
  //   this.campaignList.map(  (ele : any) => {
  //     let id = ele.for 
  //    this.http.get(`http://10.62.0.60:3000/api/employees/${id}`).subscribe((data : any) => {
  //     console.log();
  //     // this.employeeList.push(data.Items[0])
  //   })
  // })


  
   
}   

  //  view(){
  //   this.campaignList.map(  (ele : any) => {
  //       let id = ele.for 
  //      this.http.get(`http://10.62.0.60:3000/api/employees/${id}`).subscribe((data : any) => {
  //       this.employeeList.push(data.Items[0])
  //     })
  //   }) 
  //   console.log("E" , this.employeeList);
  // }
}