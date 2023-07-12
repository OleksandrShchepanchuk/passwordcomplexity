import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordFormComponent } from '../passwordForm/passwordForm.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Indicators } from '../indicators/indicators.component';
import { PasswordInputComponent } from '../passwordInput/passwordInput.component';
import { NoWhitespaceInputDirective } from 'src/shared/o-whitespace-input.directive';
import { NoCyrillicCharactersDirective } from 'src/shared/no-cyrillic-characters.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    Indicators,
    PasswordInputComponent,
    NoWhitespaceInputDirective,
    NoCyrillicCharactersDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
