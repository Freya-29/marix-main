import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  averageScore:any = 0;
  temp :any = [];
  rotationAngle:string = '-90deg'

  constructor() { }

  ngOnInit() {
    this.calculateScore()
    this.calculateDegree()
  }

  values:any = {
    Good : 4,
    AboveAverage : 3,
    average : 2,
    Belowaverage : 1,
    Poor : 0
  }

  data = [
    {
      Ownershp:'Poor',
      Scrum:'Poor'
    },
    {
      Ownershp:'average',
      Scrum:'AboveAverage'
    }
  ]

  calculateScore(){
    let val = 0;
    this.data.map(ele =>{
      Object.entries(ele).map(e =>{
        let score =this.getScoreForReview(e[1])
        val = val + score
      })
      this.temp.push(val/Object.entries(ele).length)
    })
    this.averageScore = this.temp.reduce((acc:any,num:any)=>acc+num) / this.temp.length;
  }
  getScoreForReview(question:any){
    return this.values[question]
  }
  calculateDegree(){
    this.rotationAngle = -90 + ( 36 * this.averageScore ) + 'deg'
  }

}
