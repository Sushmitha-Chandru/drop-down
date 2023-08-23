import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Options, myData } from 'src/app/models/drop-down.model';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css']
})
export class CustomDropDownComponent {
  toggleCaret:boolean=false;
  selectedOption:Options =  { id: 0, name: 'Select an option' };

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

  dataForm:any;

  constructor(private fb:FormBuilder)
  {

  }

  // ngOnInit()
  // {
  //   this.dataForm=this.fb.group({
  //     name:'',
  //     address:this.fb.array([this.fb.group({
  //       street:[''],
  //       city:['',[Validators.required]]
  //     })])
  //   }
  //   )

  //   this.dataForm.setValue({
  //     name:'abc',
  //     address:[{
  //       street:'test',
  //       city:'blore'
  //     }]
  //   })
  //   console.log(this.dataForm.value)
    
  // }

  // get address()
  // {
  //   return this.dataForm.get('address') as FormArray
  // }

  // onSubmit(value:myData)
  // {
  //   console.log(value);
  // }

}
