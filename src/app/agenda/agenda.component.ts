import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
    public isModalShown4: boolean = false;

    constructor(public router: Router) {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
  ngOnInit() {
  }
    onHidden() {
        this.isModalShown4 = false;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }
}
