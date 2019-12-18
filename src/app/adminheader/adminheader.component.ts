import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import {CookieService} from 'angular2-cookie/core';

import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
    private cookiedetails;
    private usertype;
    private addcookie: CookieService;
    private addcookie1: CookieService;

    constructor(private router: Router, addcookie: CookieService, addcookie1: CookieService) {
        this.addcookie = addcookie ;
        this.addcookie1 = addcookie1 ;
        this.router = router;
        this.cookiedetails = this.addcookie.get('cookiedetails');
        this.usertype = this.addcookie1.get('usertype');
        if (this.cookiedetails== '') {
            console.log(this.cookiedetails + '??????????');
            console.log('admin_header');
            this.router.navigateByUrl('/');
        }
    }

    ngOnInit() {
    }

}
