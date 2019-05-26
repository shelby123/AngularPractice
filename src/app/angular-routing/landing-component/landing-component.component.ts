import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url)
    console.log(this.router.routerState)
    console.log(this.router.routerState.snapshot.url)
  }

  // changeRoute(outlet:RouterOutlet) {
  //   outlet.activatedRoute ="hello";
  // }

}
