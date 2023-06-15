import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  columns : any[]= [1,2,3,4,5];
  tableQuestions: any[] = ['Ownership','Quality','Team coordinator','Attitude','Communication','Technical Knowledge','Timely Delivery','Jira and Scrum process']
  response :any[]= [];
  submitButtonDisabled = true
  addFieldVisible = false
  constructor(private http : HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.tableQuestions.map(ele =>{
      let newObject = {
        category:ele,
        rating:""
      }
      this.response.push(newObject)
    })
  }

  select(category:any,rating:any) {
    this.response.map(ele =>{
      if(ele.category == category){
        ele.rating = rating
      }
    })
    this.check()
  }

  check(){
    let temp: any[] = [];
    this.response.map(ele => {
      if(ele.rating.length == 0){
        temp.push(ele.category)
      }
    })
    if(temp.length === 0){
      this.submitButtonDisabled = false
    }else{
      this.submitButtonDisabled = true
    }
  }

  add_field(){
    this.addFieldVisible = true
  }

  submit(){
    const data = {
      'campaignId': this.route.snapshot.params['cid'],
      'for': this.route.snapshot.params['fid'],
      'reviewer': this.route.snapshot.params['rid'],
      'review': this.response
    }
    this.http.post('http://localhost:3000/api/feedbacks', data).toPromise().then((data:any) => {
      console.log(data);
      
    }).catch((err) => {
      console.log(err);
      
    });
    console.log(this.response)
  }

  cancelAddField(){
    this.addFieldVisible = false
  }

  saveAddField(val:any){
    this.tableQuestions.push(val.value)
    let newObj = {
      category:val.value,
      rating:""
    }
    this.response.push(newObj)
    this.addFieldVisible = false
  }

  }
