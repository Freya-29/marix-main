import { Component, Input, OnInit } from '@angular/core';

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
  @Input() formEditable:any;
  constructor() { }

  ngOnInit() {
    this.tableQuestions.map(ele =>{
      let newObject = {
        question:ele,
        answer:""
      }
      this.response.push(newObject)
    })
    console.log(this.formEditable)
  }

  select(question:any,answer:any) {
    this.response.map(ele =>{
      if(ele.question == question){
        ele.answer = answer
      }
    })
    this.check()
  }

  check(){
    let temp: any[] = [];
    this.response.map(ele => {
      if(ele.answer.length == 0){
        temp.push(ele.question)
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
    console.log(this.response)
  }

  cancelAddField(){
    this.addFieldVisible = false
  }

  saveAddField(val:any){
    this.tableQuestions.push(val.value)
    let newObj = {
      question:val.value,
      answer:""
    }
    this.response.push(newObj)
    this.addFieldVisible = false
  }

  removeField(val:any){

    this.tableQuestions = this.tableQuestions.filter(ele => {
      if(ele !== val){
        return ele
      }
    })

    this.response = this.response.filter(ele =>{
      if(ele.question != val){
        return ele
      }
    })

  }

  }
