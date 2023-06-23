import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {


  constructor(private router:Router, private employeeService: EmployeeService , private http : HttpClient) { }

  temp: any;

  employeeList: Employee[] = [] ;
  campaignArr : [] = [];

  ngOnInit() {
    this.http.get('http://10.62.0.60:3000/api/campaigns').subscribe((data : any) => {
      this.campaignArr = data.Items
      console.log(this.campaignArr);
     
   })
     
    this.employeeService.getemployees().then((employee:any) => {
      this.employeeList = employee;
      console.log(employee);
      // this.employeeList.forEach((element: any) => {
      //   element['isCampaignStarted'] = false;
      // });
      this.temp= this.employeeList.map((ele: any) => ele)
    }).catch()

    console.log(this.employeeList);
    console.log(this.temp);


    let data = {}
    this.http.get('http://10.62.0.60:3000/api/campaigns').subscribe(data => {
        console.log("Campaigns",data);
     })
  }

 

  startCampaign(val:any){

    console.log("Val" , val);
    const obj = {
      isCampaignStarted : true
    }
    this.http.put(`http://10.62.0.60:3000/api/employee/campaign/${val.id}`, obj).subscribe(res => {
      console.log(res);
    })
     this.router.navigateByUrl(`dashboard/campaign/share/${val.id}`)
    
  //  this.temp.map((ele : any) =>{
  //     if(ele.firstName == val.firstName){
  //       ele.isCampaignStarted = true
  //       this.router.navigateByUrl(`dashboard/campaign/share/${ele.id}`)
  //     }
  //   })

  //   console.log(val);
    
  }




  async stopCampaign(val:any){
 
    const obj = {
      isCampaignStarted : false
    }

    await this.http.put(`http://10.62.0.60:3000/api/employee/campaign/${val.id}`, obj).toPromise().then(res => {
      console.log(res);
    })
     
    

    let id = val.id;
    let campaignId = "";

    this.campaignArr.map(async (ele : any) => {
          if(val.id === ele.for){
            console.log(val.id === ele.for);
            await this.http.put(`http://10.62.0.60:3000/api/campaign/deactivate/${ele.id}`, {active: false}).toPromise().then(res => {
              console.log(res);
             })
          }
    })
  
    console.log('1')
    await this.employeeService.getemployees().then((employee:any) => {
      console.log('2')
      this.employeeList = employee;
      console.log(employee);
      // this.employeeList.forEach((element: any) => {
      //   element['isCampaignStarted'] = false;
      // });
      this.temp= this.employeeList.map((ele: any) => ele)
    }).catch()
    console.log('3')
    //  this.router.navigateByUrl(`dashboard/campaign/share/${val.id}`)
  }


  onSearch1(value:any){
    console.log(value.value)
    if(value.value.length === 0){
      this.temp = this.employeeList
    }
    this.temp = this.employeeList.filter((ele: any) => ele.department.toLocaleLowerCase().startsWith(value.value.toLocaleLowerCase()))
  }





}
