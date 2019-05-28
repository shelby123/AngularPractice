import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Model } from './data-model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  exampleForm : FormGroup
  formArray:FormGroup[] = []
  dataModel = new Model("Sample Title", "Sample description")

  @ViewChild("addButton") addButton : ElementRef

  descriptionControl =   new FormControl("", [
    Validators.required
  ])


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   

    this.exampleForm = this.fb.group({
      title:["", [Validators.required ]],
      description: this.descriptionControl,
      repeatBoolean: false,
      numberRepeat: {value:"", disabled:true}
    })

    this.formArray = this.formArray.concat(this.buildFormGroup())
    this.formArray = this.formArray.concat(this.buildFormGroup())

  }

  addPin() {
    this.formArray = this.formArray.concat(this.buildFormGroup())
    this.addButton.nativeElement.scrollIntoView()
  }

  buildFormGroup():FormGroup {
    let item = this.fb.group({
      title:["", [Validators.required ]],
      description: this.descriptionControl,
      repeatBoolean: false,
      numberRepeat: {value:"", disabled:true}
    })

    item.get("repeatBoolean").valueChanges.subscribe(value =>{
      if(value) {
        item.get("numberRepeat").enable()
        item.get("numberRepeat").setValidators(Validators.required)
      } else {
        item.get("numberRepeat").disable()
        item.get("numberRepeat").clearValidators();
      }
      item.get("numberRepeat").updateValueAndValidity()
     
    })
    return item
  }
  
  remove(index:number) {
    console.log("removing index " + index)
    this.formArray.splice(index, 1)
    console.log(this.formArray)
  }

}
