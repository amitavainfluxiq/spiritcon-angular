import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
//import 'rxjs/add/operator/map';
@Injectable()
export class Commonservices {
    url: any;
    openserver: any;
    openlocal: any;

    constructor(private http: Http) {
       /* if (window.location.hostname == 'localhost') {
            this.url = 'http://localhost:3011/';
            this.openlocal = true;
            this.openserver = false;
        } else {*/
           // this.url = 'http://influxiq.com:3023/';
         //   this.url = 'http://spiritconvention.com:3023/';
       // this.url = 'https://demo.spiritconvention.com/server.php?q=';
        this.url = "https://1ovfwgjxs0.execute-api.us-east-1.amazonaws.com/production/api/";
            this.openlocal = false;
            this.openserver = true;
     //   }

    }



}