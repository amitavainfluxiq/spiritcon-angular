import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import {CookieService} from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-adminleftsidebar',
  templateUrl: './adminleftsidebar.component.html',
  styleUrls: ['./adminleftsidebar.component.css']
})
export class AdminleftsidebarComponent implements OnInit {
    public addcookie: CookieService;
    public cookiedetails;
    public addcookie1: CookieService;
    public usertype;
    // public name;
    constructor(addcookie: CookieService, addcookie1: CookieService, private _http: Http, private router: Router) {
        this.addcookie = addcookie ;
        this.addcookie1 = addcookie1 ;
        this.cookiedetails = this.addcookie.get('cookiedetails');
        this.usertype = this.addcookie1.get('usertype');
        if (typeof(this.cookiedetails) == 'undefined') {
            console.log(this.cookiedetails + '??????????');
            console.log('admin_leftsidebar');
            this.router.navigateByUrl('/');
        }
        else {
        }
        /*dashboard_wrappertop*/
        $(window).on('load', function() {
            setInterval(() => {
                //  alert($('.dashboard_wrappertop').height());
                // alert($('.dashboard_right').height());
                // var leftpanellength='';
                var leftpanellength =$('.dashboard_right').height()+3;
                // alert(leftpanellength);
                $('.dashboard_left').height(leftpanellength);
            }, 4000); });
       /* $(window).load(function() {
            setInterval(() => {
                //  alert($('.dashboard_wrappertop').height());
                // alert($('.dashboard_right').height());
                // var leftpanellength='';
                var leftpanellength =$('.dashboard_right').height()+3;
                // alert(leftpanellength);
                $('.dashboard_left').height(leftpanellength);
            }, 4000);
        });*/
    }

    ngOnInit() {
    }
    logout() {
        this.addcookie.deleteAll();
        this.router.navigateByUrl('/');

    }
}