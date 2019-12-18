import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Commonservices} from '../app.commonservices' ;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
    providers: [Commonservices],
})
export class HeaderComponent implements OnInit {
    public isModalShown: boolean = false;
    public isModalShown2: boolean = false;
    public isModalShown3: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShown5: boolean = false;
    public isModalShown10: boolean = false;
    public isModalShowncom1: boolean = false;
    public email_subs;
    public emailerror;
    public serverurl;

  constructor( private _commonservices: Commonservices , private _http: Http) {
      this.emailerror = null;
      this.serverurl = _commonservices.url;
  }

  ngOnInit() {
  }
    callmodalforagenda() {
        this.isModalShown = true;
    }
    callmodalforbuytickets() {
        this.isModalShown3 = true;
    }
    callmodalforagendamoal(){
        this.isModalShown5 = true;
    }
    callmodalforagendamoalnew(){
        this.isModalShown10 = true;
    }
    onHidden() {
        this.isModalShown = false;
        this.isModalShown2 = false;
        this.isModalShown3 = false;
        this.isModalShown4 = false;
        this.isModalShown5 = false;
        this.isModalShown10 = false;
        this.isModalShowncom1 = false;
    }
    nullemailerror() {
      this.emailerror=null;
    }
    callforsubs() {
        this.emailerror = null;
        console.log(';;;;'+this.email_subs);
        if (this.email_subs == '' || this.email_subs == null) {
           this.emailerror = 'Email is required!';
        }
        console.log(this.email_subs+'?');


        if (this.email_subs != null || this.email_subs == '') {
            console.log('? inside');
        if (!this.email_subs.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            this.emailerror = 'Email is not valid!';
        }
        }
        console.log(this.emailerror);

        if (this.emailerror == null) {
            let link = this.serverurl + 'newsletter';
            let data = {
                emailid: this.email_subs,
                added_date: this.getdate()
            };
            this._http.post(link, data)
                .subscribe(res => {
                    let result = res.json();
                    if (result.status == 'success') {
                        this.isModalShown2 = true;
                        this.email_subs = null;
                    }
                }, error => {
                    console.log('Oooops!');
                });
        }
    }
    getdate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let today1 = yyyy + '-' + mm + '-' + dd;
        console.log(today1);
        return today1;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }
    callmodalforagendamoalcom1() {
        this.isModalShowncom1 = true;
    }
}
