import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  departmentData: any = [];
  monthData:any = ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  yearData = [2023, 2024, 2025, 2026, 2027];
  selectedDepartment: any;
  selectedMonth:any;
  selectedYear:any;
  constructor(private http: HttpClient, private router:Router) { }

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

  onOptionSelected(selectedOption: string){
    this.selectedDepartment = this.departmentData.filter((element: any) => {
      return element.departmentName === selectedOption
    });
    console.log(this.selectedDepartment);
    
  }
  onOptionSelected1(selectedOption: string){
    this.selectedMonth = selectedOption.slice(0, 3);
    console.log(this.selectedMonth);
    
  }
  onOptionSelected2(selectedOption: string){
    this.selectedYear = selectedOption;
    console.log(this.selectedYear);
    
  }

  submit() {
    const queryParams = {
      'depid': this.selectedDepartment[0].id,
      'm': this.selectedMonth,
      'y': this.selectedYear
    };
    this.router.navigate(['/', 'dashboard', 'view', 'report'], {state: queryParams});
    
  }

}
