import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bootstrap-cards',
  templateUrl: './bootstrap-cards.component.html',
  styleUrls: ['./bootstrap-cards.component.scss']
})
export class BootstrapCardsComponent implements OnInit {

  cardClickCount:number = 0

  padding:String=""
  imageStyleClass:String=""
  selectedCard:String="unselected"

  selected:boolean = false;

  cupcakeCardIconShow:boolean=false

  constructor() { }

  ngOnInit() {
  }

  cardClicked() {
    this.cardClickCount++;
    this.selected = !this.selected;
    if(this.selected){
      this.padding = "p-2"
      this.selectedCard = "selected"
    } else {
      this.padding = ""
      this.selectedCard = "unselected"
    }
  }

}
