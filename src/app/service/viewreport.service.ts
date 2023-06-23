import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ViewreportService {

  constructor(private http: HttpClient) { }

  getDepartment(){
    return this.http.get('http://10.62.0.60:3000/api/department').toPromise()
  }
  
  getCampaign(){
    return this.http.get('http://10.62.0.60:3000/api/campaigns').toPromise()
  }

  storeCampaign(data: any){
    const options = {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'json' as const,
    };
    this.http.post('http://10.62.0.60:3000/api/campaigns', data, options).toPromise().then((data: any) => {
      return data;
    }).catch((err: any) => {
      console.log(err)
      return err;
    })
  }



}