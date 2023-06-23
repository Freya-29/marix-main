import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }


  getemployees() {
    return this.http.get('http://10.62.0.60:3000/api/employees').toPromise();
  }

  getEmployeeFromDeptId(id: any){
    return this.http.get(`http://10.62.0.60:3000/api/employees/department/${id}`).toPromise();
  }




}