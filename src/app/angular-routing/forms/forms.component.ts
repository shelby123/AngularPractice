import { Component, OnInit } from '@angular/core';
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

    this.formArray.forEach(item => {
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
    })

    
    // this.exampleForm.get("repeatBoolean").valueChanges.subscribe(value =>{
    //   if(value) {
    //     this.exampleForm.get("numberRepeat").enable()
    //     this.exampleForm.get("numberR epeat").setValidators(Validators.required)
    //   } else {
    //     this.exampleForm.get("numberRepeat").disable()
    //     this.exampleForm.get("numberRepeat").clearValidators();
    //   }
    //   this.exampleForm.get("numberRepeat").updateValueAndValidity()
     
    // })

   
  }

  addPin() {
    this.formArray = this.formArray.concat(this.buildFormGroup())
  }

  buildFormGroup():FormGroup {
    return this.fb.group({
      title:["", [Validators.required ]],
      description: this.descriptionControl,
      repeatBoolean: false,
      numberRepeat: {value:"", disabled:true}
    })
  }

}
