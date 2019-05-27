import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {

  pathParamValue = new FormControl('');
  queryParamValue = new FormControl('');

  queryParameters: String[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
    console.log(this.router.routerState)
    console.log(this.router.routerState.snapshot.url)
  }



  addValToQueryParameters(item:String) {
    this.queryParameters = this.queryParameters.concat(item);
    this.queryParamValue.reset();
    console.log(this.queryParameters)
  }

  removeItem(itemToRemove: String) {
    console.log(itemToRemove)
  }
}
