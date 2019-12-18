import { Component, OnInit } from '@angular/core';
import {Commonservices} from '../app.commonservices' ;
import {DomSanitizer} from '@angular/platform-browser';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-convention-center',
  templateUrl: './convention-center.component.html',
  styleUrls: ['./convention-center.component.css'],
    providers: [Commonservices],
})
export class ConventionCenterComponent implements OnInit {
    public isModalShown: boolean = false;
    public isModalShown3: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShownblock: boolean = false;
    public isModalShown5: boolean = false;
    public isModalShown6: boolean = false;
    public isModalShown10: boolean = false;
    public isModalShowncom1: boolean = false;
    public isModalShowncom2: boolean = false;
    public serverurl;
    public boothlist;
    public healerlist;
    public contentdetails;

  constructor(private _http: Http, private _commonservices: Commonservices, private router: Router, public _sanitizer: DomSanitizer) {
      this.serverurl = _commonservices.url;
      this.getBoothList();
      this.getHealerList();
      //$('map').imageMapResize();
  }

    ngOnInit() {
    }
    ngAfterViewChecked() {
        //$('map').imageMapResize();
    }
    getBoothList() {
       let link = this.serverurl + 'vendorlist';
       // let link = 'http://influxiq.com:3023/vendorlist';
        this._http.get(link)
            .subscribe(res => {
                let result = res.json();
                this.boothlist = result.res;
                console.log('boothlist--------');
                console.log(this.boothlist);
            }, error => {
                console.log('Oooops!');
            });
    }
    getHealerList() {
        let link = this.serverurl + 'healerlist';
      //  let link = 'http://influxiq.com:3023/healerlist';
        this._http.get(link)
            .subscribe(res => {
                let result = res.json();
                this.healerlist = result.res;
                console.log('healerlist--------');
                console.log(this.healerlist);
            }, error => {
                console.log('Oooops!');
            });
    }
    callbuyticket() {
        this.isModalShown3 = true;
    }
    onHidden() {
        this.isModalShown3 = false;
        this.isModalShownblock = false;
        this.isModalShown4 = false;
        this.isModalShown5 = false;
        this.isModalShown6 = false;
        this.isModalShown10 = false;
        this.isModalShowncom1 = false;
        this.isModalShowncom2 = false;
    }
    callmodalforagenda() {
        this.isModalShownblock = true;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }

    callmodalforagendamoal() {
        this.isModalShown6 = true;
    }

    callmodalforagendamoalnew() {
        this.isModalShown10 = true;
    }

    callmodalforagendamoalcom1() {
        this.isModalShowncom1 = true;
    }
    callmodalforagendamoalcom2() {
        this.isModalShowncom1 = true;
    }

    showcontents(itemno) {
        this.contentdetails = '';
        for ( let i in this.boothlist) {
            if (this.boothlist[i].booth_no == itemno) {
                this.contentdetails = this.boothlist[i];
            }
        }
        console.log('this.contentdetails');
        console.log(this.contentdetails);
        this.isModalShown5 = true;
    }

    showcontentsofhealer(val){

    }


}
