import { Component } from '@angular/core';
import { Options } from 'src/app/models/drop-down.model';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css']
})
export class CustomDropDownComponent {
  toggleCaret:boolean=false;
  selectedOption:Options =  { id: 0, name: 'Select an option' };

  //static dropdown data
  list=[
     { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
    { id: 6, name: 'Option 6' },
    { id: 7, name: 'Option 7' },
    { id: 8, name: 'Option 8' },
  ];

  onSelection(item: any)
  {
    this.selectedOption=item;
    this.toggleCaret=true;
  }

  invertCaret()
  {
    this.toggleCaret=!this.toggleCaret;
  }
}
