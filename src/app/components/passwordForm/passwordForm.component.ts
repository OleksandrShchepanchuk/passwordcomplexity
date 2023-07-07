import  { Component, Input } from '@angular/core';


@Component({
    selector: 'app-passwordForm',
    templateUrl: './passwordForm.component.html',
    styleUrls: ['./passwordForm.component.scss']
})

export class PasswordFormComponent {
    @Input() password: string = "";
    colors: string[] = [];
    strength: string = '';
    inputType: string = "password";
    
    toggleInputType() {
      this.inputType = (this.inputType === "password") ? "text" : "password";
    }
    
    setValue (event: Event) {
            this.password = (event.target as HTMLTextAreaElement).value.replaceAll(' ', '');
            const inputElement = document.getElementById('password') as HTMLInputElement;
            const {colors, strength} = this.checkPassword();
            [this.colors, this.strength] = [colors, strength];
            if (inputElement) {
              inputElement.value = this.password; // Manually update the input field value
            }
      }
    checkPassword () {

        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const medium = this.password.match(/\d/) && this.password.match(/[a-zA-Z]/) 
                    || this.password.match(/\d/) &&  this.password.match(specialChars) 
                    
                    || this.password.match(/[a-zA-Z]/)  &&  this.password.match(specialChars) ;
        const strong = this.password.match(/\d/) && this.password.match(/[a-zA-Z]/) &&  this.password.match(specialChars) ;
        if (this.password === "") {

            return {
                colors: ["gray","gray","gray"],
                strength: ""
            };
        }
        if (this.password.length < 8) {

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