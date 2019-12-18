import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  public isModalShown4: boolean = false;
  public isModalShown5: boolean = false;
  public isModalShown: boolean = false;
  public isModalShown10: boolean = false;


  constructor() { }

  ngOnInit() {
  }

  onHidden() {

    this.isModalShown4 = false;
    this.isModalShown5 = false;
    this.isModalShown = false;
    this.isModalShown10 = false;
  }

  callmodalforbuybooth() {
    this.isModalShown4 = true;
  }
  callmodalforagendamoal(){
    this.isModalShown5 = true;
  }

  callmodalforagenda() {
    this.isModalShown = true;
  }

  callmodalforagendamoalnew() {
    this.isModalShown10 = true;
  }

}
