import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bootstrap-cards',
  templateUrl: './bootstrap-cards.component.html',
  styleUrls: ['./bootstrap-cards.component.scss']
})
export class BootstrapCardsComponent implements OnInit {

  cardClickCount:number = 0

  buttonStyle:String="btn-dark"
  padding:String=""
  imageStyleClass:String=""
  selectedCard:String=""

  selected:boolean = false;

  cupcakeCardIconShow:boolean=false

  constructor() { }

  ngOnInit() {
  }

  cardClicked() {
    this.cardClickCount++;
    this.selected = !this.selected;
    if(this.selected){
      this.buttonStyle = "btn-outline-dark"
      this.padding = "p-2"
      this.imageStyleClass = "imageStyle"
      this.selectedCard = "selected"
    } else {
      this.buttonStyle = "btn-dark"
      this.padding = ""
      this.imageStyleClass = ""
      this.selectedCard = ""
    }
  }

}
