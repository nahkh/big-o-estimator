import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataPoint } from '../models/DataPoint.model';

@Component({
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  @ViewChild('inputField')
  inputField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public getDataPoints(): DataPoint[] {
    const rawInput: string = this.inputField.nativeElement.value || '';
    const rows = rawInput.split('\n');
    const regexp: RegExp = /^\D*(\d\d*)\D\D*(\d\d*)\D*$/;

    const output = [];
    rows.forEach(row => {
      const match = regexp.exec(row);
      if (match != null) {
        const n = parseInt(match[1]);
        const time = parseInt(match[2]);
        output.push({
          n, time
        });
      }
    });

    return output;
  }
}
