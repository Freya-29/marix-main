import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { ViewreportService } from 'src/app/service/viewreport.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  departmentData:any;
  param: any;
  allempcurrm: any = [];
  constructor(private route:ActivatedRoute, private http: HttpClient, private location:Location, 
    private router:Router, private viewreportService: ViewreportService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log(history.state);
    this.param = history.state.depid;
    // this.getEmployeeFromMonthAndYear();
    // console.log(this.param);
    // this.getEmpFromDeptIdAndFilter(this.param)
    this.http.get('http://10.62.0.60:3000/api/campaigns').toPromise().then((data: any) => {
      console.log(data['Items']);
      data['Items'].forEach((element: any) => {
        if(element['created']){
          var abc = element['created'];
          if(history.state.m === abc.slice(4,7) && history.state.y === abc.slice(11,15)){
            this.allempcurrm.push(element['for'])
          }
          
        }
        
      });
      console.log(this.allempcurrm);
      try{
      this.http.get(`http://10.62.0.60:3000/api/employees/department/${this.param}`).toPromise().then((data:any) => {
        // this.departmentData = data
        console.log(data);
        this.departmentData = data.filter((item: any) => this.allempcurrm.indexOf(item.id) !== -1);

        console.log(this.departmentData);
        
      })
     } catch{
  
     }
      this.allempcurrm = [];
    }).catch((err) => {
      console.log(err);
    })
  }

  goBack(){
    this.location.back();
  }

  // getEmployeeFromMonthAndYear(){
  //   this.viewreportService.getCampaign().then((data: any) => {
  //     console.log(data['Items']);
  //     data['Items'].forEach((element: any) => {
  //       if(element['created']){
  //         var abc = element['created'];
  //         if(history.state.m === abc.slice(4,7) && history.state.y === abc.slice(11,15)){
  //           this.allempcurrm.push(element['for'])
  //         }
  //       }
        
  //     });
  //   }).catch((err: any) => {
  //     console.log(err);
      
  //   })
  // }

  // getEmpFromDeptIdAndFilter(id: any){
  //   this.employeeService.getEmployeeFromDeptId(id).then((data: any) => {
  //     console.log(data);
  //       this.departmentData = data.filter((item: any) => this.allempcurrm.indexOf(item.id) !== -1);
  //       console.log(this.departmentData);
  //   })
  // }

  toChartPage(employee: any){
    const queryParams = {
      'empid': employee.id,
    };
    console.log(employee);
    this.router.navigate(['/','dashboard','view', 'chart'], {state: queryParams} );
  }

  

}
