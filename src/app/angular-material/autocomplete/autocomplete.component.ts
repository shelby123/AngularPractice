import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  options = ["option one", "option two", "option three", "option four" ]

  filteredOptions:Observable<String[]>

  myGroup:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myGroup=this.fb.group({
      myControl:""
    })
    
    this.filteredOptions = this.myGroup.get("myControl").valueChanges
            .pipe(
              startWith(""),
              map(value=> this._filterOptions(value))
            );



  }


  _filterOptions(value: String): String[] {
    const val = value.toLowerCase();
    let result = this.options.filter(item => {
      return item.toLowerCase().includes(val)
    })
    return result
  }

}
