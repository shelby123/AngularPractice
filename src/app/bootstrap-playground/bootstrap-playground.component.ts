import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootstrap-playground',
  templateUrl: './bootstrap-playground.component.html',
  styleUrls: ['./bootstrap-playground.component.css']
})
export class BootstrapPlaygroundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  helloWorld() {
    this.router.navigate(["bootstrap/colors"])
  }

}
