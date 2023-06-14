import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  departmentData: any = [];
  monthData:any = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  yearData = [2023, 2024, 2025, 2026, 2027];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.department();
  }

  async department(){
   try{
    this.http.get('http://10.62.0.60:3000/api/department').toPromise().then((data:any) => {
      this.departmentData = data['Items']
      console.log(data);
      
    })
   } catch{

   }
  }

  submit() {
    try{
      this.http.get('http://10.62.0.60:3000/api/employees/department/dc6e0f4c-6fe3-4870-a233-6018cb552403').toPromise().then((data:any) => {
        this.departmentData = data['Items']
        console.log(data);
        
      })
     } catch{
  
     }
  }

}
