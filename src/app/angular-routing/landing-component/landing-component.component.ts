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

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
    console.log(this.router.routerState)
    console.log(this.router.routerState.snapshot.url)
  }

  changeRoute() {
    // this.router.navigate(["/routing", this.pathParamValue.value])
    // this.pathParamValue.reset();

  }

}
