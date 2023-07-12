import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  checkPasswordComplexity(password: string): { colors: string[], strength: string } {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const medium = password.match(/\d/) && password.match(/[a-zA-Z]/) 
                    || password.match(/\d/) &&  password.match(specialChars) 
                    
                    || password.match(/[a-zA-Z]/)  &&  password.match(specialChars) ;
        const strong = password.match(/\d/) && password.match(/[a-zA-Z]/) &&  password.match(specialChars) ;
        if (password === "") {

            return {
                colors: ["gray","gray","gray"],
                strength: ""
            };
        }
        if (password.length < 8) {

            return {
                colors: ["rgb(253, 101, 101)","rgb(253, 101, 101)","rgb(253, 101, 101)"],
                strength: "You need at least 8 characters"
            };
        }
        if (strong) {

            return  {
                colors: ["green","green","green"],
                strength: "This password is strong"
            };
        }
        if (medium) {

            return  {
                colors: ["yellow","yellow","gray"],
                strength: "This password is medium",
            }
        }
        return {
            colors: ["rgb(253, 101, 101)","gray","gray"],
            strength: "This password is easy",
        };
  }
}