import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  

  onSearch(val:any){
    if(val.value.length === 0){
      this.temp = this.employeeList
    }else{
      this.temp = this.temp.filter(ele => ele.name.toLocaleLowerCase().startsWith(val.value.toLocaleLowerCase()))
    }
    console.log(val.value)
  }

  employeeList = [
    {
      id:1,
      name:"akshat",
      department:"Cloud",
      isCampaignStarted:true
    },
    {
      id:2,
      name:"Harsh",
      department:"Cloud",
      isCampaignStarted:false
    },
    {
      id:3,
      name:"Neel",
      department:"Hybrid",
      isCampaignStarted:false
    },
    {
      id:4,
      name:"freya",
      department:"Hybrid",
      isCampaignStarted:false
    },
    {
      id:5,
      name:"hetvi",
      department:"Hybrid",
      isCampaignStarted:false
    },
    {
      id:6,
      name:"Hardik",
      department:"Android",
      isCampaignStarted:false
    },
    {
      id:7,
      name:"Anushka",
      department:"IOS",
      isCampaignStarted:false
    }
  ]

  temp = this.employeeList.map(ele => ele)

  startCampaign(val:any){
    // we will also have to make a api call to get all the employees again
   this.temp.map(ele =>{
      if(ele.name === val.name){
        ele.isCampaignStarted = true
      }
    })
    this.router.navigateByUrl('dashboard/campaign/share')
  }

  stopCampaign(val:any){
     // we will also have to make a api call to get all the employees again
    this.temp.map(ele =>{
      if(ele.name === val.name){
        ele.isCampaignStarted = false
      }
    })
  }


}
