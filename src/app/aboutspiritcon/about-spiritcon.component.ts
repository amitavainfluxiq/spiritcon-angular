import { Component, OnInit } from '@angular/core';
import {Commonservices} from '../app.commonservices' ;
import {DomSanitizer} from '@angular/platform-browser';
import {Http} from '@angular/http';
import {Router, NavigationEnd} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-about-spiritcon',
  templateUrl: './about-spiritcon.component.html',
  styleUrls: ['./about-spiritcon.component.css'],
    providers: [Commonservices],
})
export class AboutSpiritconComponent implements OnInit {
    public isModalShown3: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShown: boolean = false;
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
    callbuyticket() {
        this.isModalShown3 = true;
    }
    onHidden() {
        this.isModalShown3 = false;
        this.isModalShown = false;
        this.isModalShown4 = false;
        this.isModalShown5 = false;
        this.isModalShown10 = false;
        this.isModalShowncom1 = false;
        this.isModalShowncom2 = false;
    }
    callmodalforagenda() {
        this.isModalShown = true;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }

    callmodalforagendamoal() {
        this.isModalShown5 = true;
    }

    callmodalforagendamoalnew() {
        this.isModalShown10 = true;
    }

    callmodalforagendamoalcom1() {
        this.isModalShowncom1 = true;
    }
    callmodalforagendamoalcom2() {
        this.isModalShowncom2 = true;
    }

}
