import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'highcharts';
import { ViewreportService } from 'src/app/service/viewreport.service';

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
  constructor(private http: HttpClient, private router:Router, private viewreportService: ViewreportService) { }

  ngOnInit() {
    this.getdepartment();
  }

  async getdepartment(){
    this.viewreportService.getDepartment().then((data: any)=>{
      this.departmentData = data['Items']
      console.log(data);
    }).catch((err: any) => {
      console.log(err);
      
    })
  }

  onDepartmentSelected(selectedOption: string){
    this.selectedDepartment = this.departmentData.filter((element: any) => {
      return element.departmentName === selectedOption
    });
    console.log(this.selectedDepartment);
    
  }
  onMonthSelected(selectedOption: string){
    this.selectedMonth = selectedOption.slice(0, 3);
    console.log(this.selectedMonth);
    
  }
  onYearSelected(selectedOption: string){
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
