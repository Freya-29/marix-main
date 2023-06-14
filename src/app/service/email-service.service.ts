import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) {}

  sendEmail(recipients: string[], subject: string, body: string) {
    const payload = {
      to:recipients,
      subject,
      body
    };
    const headers = { 'Content-Type': 'application/json' };
    console.log('messi ->',this.http.post(`http://10.62.0.60:3000/api/email`, payload))
    return this.http.post(`http://10.62.0.60:3000/api/email`, payload,{headers});
  }
}
