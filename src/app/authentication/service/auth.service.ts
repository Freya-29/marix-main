import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/model/user.model";


@Injectable({ providedIn:'root'})
export class AuthService {

    private userSubject!: BehaviorSubject<User>;
    public user!: Observable<User>;
    userId: any;
    

    constructor(private http: HttpClient,private router: Router){}

    // public get userValue(){
    //     return this.userSubject.value;
    // }

    login(username:string, password:string){
        this.http.post('http://10.62.0.60:3000/api/login', {username: username, password: password}).toPromise().then((data:any) => {
            console.log(data);
            this.userId = data.user.id;
            localStorage.setItem("userId", this.userId);

            console.log(this.isAuthenticated());
            if(this.isAuthenticated()){
                this.router.navigate(['./dashboard']);
                
                
                return;
            }

        }).catch(Error => {
            
         console.log(Error)
        })
    }

    isAuthenticated(): boolean {
        var id = localStorage.getItem('userId');
        if(id){
            return true
        } else{
            return false
        }
      }
}