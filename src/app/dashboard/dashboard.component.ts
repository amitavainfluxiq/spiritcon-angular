import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import {CookieService} from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
import {Commonservices} from '../app.commonservices' ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    providers: [Commonservices]
})
export class DashboardComponent implements OnInit {
    public addcookie: CookieService;
    public addcookie1: CookieService;
    public cookiedetails;
    public usertype;
    public serverurl;

    constructor( addcookie: CookieService, addcookie1: CookieService, private _http: Http, private router: Router, private _commonservices: Commonservices) {
        this.addcookie = addcookie ;
        this.addcookie1 = addcookie1 ;
        this.serverurl = _commonservices.url;
        this.cookiedetails = this.addcookie.get('cookiedetails');
        this.usertype = this.addcookie1.get('usertype');
        if (this.cookiedetails== '') {
            this.router.navigateByUrl('/');
        }
    }

  ngOnInit() {
  }
  logout() {
        console.log("is working ");
        console.log(this.addcookie.get('cookiedetails'));
        this.addcookie.deleteAll();
        this.addcookie1.deleteAll();
        console.log("ok!!!!!!!");
        console.log(this.addcookie.get('cookiedetails'));
        this.router.navigateByUrl('/');

    }
}
