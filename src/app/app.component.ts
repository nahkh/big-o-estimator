import { Component, ViewChild, ElementRef } from '@angular/core';
import { DataInputComponent } from './data-input/data-input.component';
import { bestFit } from './estimator/find-best';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Big O Estimator';

  @ViewChild(DataInputComponent)
  dataInput: DataInputComponent;

  result: string = '';

  estimate(): void {
    const data = this.dataInput.getDataPoints();
    this.result = bestFit(data).name;    
  }
}
