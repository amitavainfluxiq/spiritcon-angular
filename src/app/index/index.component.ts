import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    public isModalShown3: boolean = false;
    public isModalShown: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShown5: boolean = false;
    public isModalShown10: boolean = false;
    public isModalShowncom1: boolean = false;
    public isModalShowncom2: boolean = false;

  constructor(private router: Router) {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
  }
   /* ngAfterViewChecked(){
        $('.carousel').carousel({
            interval: 6000
        });


        $('.bannerarrowscroll').click(function () {

            $('html, body').animate({scrollTop:$('.homeblock1').offset().top}, 'slow');

            return false;

        });
        //$('map').imageMapResize();
    }*/
    onHidden() {
        this.isModalShown3 = false;
        this.isModalShown = false;
        this.isModalShown4 = false;
        this.isModalShown5 = false;
        this.isModalShown10 = false;
        this.isModalShowncom1 = false;
        this.isModalShowncom2 = false;
    }
    callbuyticket() {
        this.isModalShown3 = true;
    }
    callmodalforagenda() {
        this.isModalShown = true;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }
    callmodalforagendamoal(){
        this.isModalShown5 = true;
    }
    callmodalforagendamoalnew(){
        this.isModalShown10 = true;
    }

    callmodalforagendamoalcom1(){
        this.isModalShowncom1 = true;
    }

    callmodalforagendamoalcom2(){
        this.isModalShowncom2 = true;
    }
}
