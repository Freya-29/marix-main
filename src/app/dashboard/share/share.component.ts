import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  everyOneSelected = false

  formVisible = false
  
  employeeList = [
    {
      id:1,
      name:"akshat",
      department:"Cloud",
      selected:false
    },
    {
      id:2,
      name:"Harsh",
      department:"Cloud",
      selected:false
    },
    {
      id:3,
      name:"Neel",
      department:"Hybrid",
      selected:false
    },
    {
      id:4,
      name:"freya",
      department:"Hybrid",
      selected:false
    },
    {
      id:5,
      name:"hetvi",
      department:"Hybrid",
      selected:false
    },
    {
      id:6,
      name:"Hardik",
      department:"Android",
      selected:false
    },
    {
      id:7,
      name:"Anushka",
      department:"IOS",
      selected:false
    }
  ]

  temp = this.employeeList.map(ele => ele)

  generateLink(){
    this.formVisible = true
  }

  cancel(){
    this.formVisible = false
  }

  share(){
    let final:any[] = []

    this.temp.map(ele =>{
      if(ele.selected){
        final.push(ele)
      }
    })

    console.log(final)
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
