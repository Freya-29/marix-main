import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailServiceService } from 'src/app/service/email-service.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor(private route : ActivatedRoute , private emailService : EmailServiceService) { }

  ngOnInit() {
  }

  everyOneSelected = false
  url = "";
  formVisible = false
  
  employeeList = [
    {
      id:1,
      name:"akshat",
      department:"Cloud",
      selected:false,
      email : "neel.butani@pmcretail.com"
    },
    {
      id:2,
      name:"Harsh",
      department:"Cloud",
      selected:false,
      email : "neel.butani@pmcretail.com"
    },
    {
      id:3,
      name:"Neel",
      department:"Hybrid",
      selected:false,
      email : "neel.heet.1234@gmail.com"
    },
    {
      id:4,
      name:"freya",
      department:"Hybrid",
      selected:false,
      email : "neel.butani@pmcretail.com"
    },
    {
      id:5,
      name:"hetvi",
      department:"Hybrid",
      selected:false,
      email : "neel.butani@pmcretail.com"
    },
    {
      id:6,
      name:"Hardik",
      department:"Android",
      selected:false,
      email : "neel.butani@pmcretail.com"
    },
    {
      id:7,
      name:"Anushka",
      department:"IOS",
      selected:false,
      email : "neel.butani@pmcretail.com"
    }
  ]

  temp = this.employeeList.map(ele => ele)

  generateLink(){
    this.formVisible = true
    console.log("Link generated");
    let id  = this.route.snapshot.params['id']
    this.url = `http://localhost:4200/form/${id}`
    console.log(this.url);
    return this.url
  }

  cancel(){
    this.formVisible = false
  }

  share(){
    let recepients :any[] = []
  
    // Getting email of recepients
    this.temp.map(ele =>{
      if(ele.selected){
        recepients.push(ele.email)
      }
    })
 
    let subject  = "For Checking email";
    let body =  this.generateLink();
    this.emailService.sendEmail(recepients , subject , body).subscribe(
    );
    console.log(recepients)
  }

  onSearch(value:any){
    console.log(value.value)
    if(value.value.length === 0){
      this.temp = this.employeeList
    }
    this.temp = this.employeeList.filter(ele => ele.department.toLocaleLowerCase().startsWith(value.value.toLocaleLowerCase()))
  }

  selectAll(){

    if(this.everyOneSelected){
      this.temp.map(ele => {
        ele.selected = false
      })
      this.everyOneSelected = false
    }else{
      this.temp.map(ele => {
        ele.selected = true
      })
      this.everyOneSelected = true
    }
  }

  checked(value:any){
    this.temp.map(ele =>  {
      if(ele.name === value.name){
        ele.selected = true
      }
    })
    console.log(this.temp)
  }
}
