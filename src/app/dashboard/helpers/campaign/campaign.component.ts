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


  constructor(private router:Router, private employeeService: EmployeeService) { }

  temp: any;

  onSearch(val:any){
    if(val.value.length === 0){

      this.temp = this.employeeList

    }else{

      this.temp = this.temp.filter((ele : any) => ele.firstName.toLocaleLowerCase().startsWith(val.value.toLocaleLowerCase()))

    }

    console.log(val.value)

  }




  employeeList: Employee[] = [] ;




  ngOnInit() {

    this.employeeService.getemployees().toPromise().then((employee:any) => {

      this.employeeList = employee;

      console.log(employee);

      this.employeeList.forEach((element: any) => {

        element['isCampaignStarted'] = false;

      });

      this.temp= this.employeeList.map((ele: any) => ele)

     

    }).catch()

    console.log(this.employeeList);
    console.log(this.temp);

  }

 

  startCampaign(val:any){

   this.temp.map((ele : any) =>{

      if(ele.firstName == val.firstName){

        ele.isCampaignStarted = true

        this.router.navigateByUrl(`dashboard/campaign/share/${ele.id}`)

      }

    })

    console.log(val);

   

  }




  stopCampaign(val:any){

    this.temp.map((ele : any) =>{

      if(ele.firstName === val.name){

        ele.isCampaignStarted = false

      }

    })

  }





}
