import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path-param',
  templateUrl: './path-param.component.html',
  styleUrls: ['./path-param.component.scss']
})
export class PathParamComponent implements OnInit {

  id: String

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
  }

}
