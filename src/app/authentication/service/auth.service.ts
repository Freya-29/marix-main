import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/model/user.model";


@Injectable({ providedIn:'root'})
export class AuthService {

    private userSubject!: BehaviorSubject<User>;
    public user!: Observable<User>;
    constructor(){}

    public get userValue(){
        return this.userSubject.value;
    }

    login(username:string, password:string){
        if(username === 'admin' && password === 'admin@123'){
            console.log("login suceessfully.");
            
        }
    }
}