import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class Indicators {
  @Input() colors: string[] = [];

}