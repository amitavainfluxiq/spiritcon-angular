import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Http} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import {CookieService} from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
import {Commonservices} from '../app.commonservices' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [Commonservices]
})
export class LoginComponent implements OnInit {
    public dataForm: FormGroup;
    private fb;
    private isSubmit;
    private isemailvalidate;
    public is_error;
    private addcookie: CookieService;
    private addcookie1: CookieService;
    private cookiedetails;
    private usertype;
    public serverurl;


    constructor(fb: FormBuilder, addcookie: CookieService, addcookie1: CookieService, private _http: Http, private router: Router, private _commonservices: Commonservices) {
        this.fb = fb;
        this.addcookie = addcookie ;
        this.addcookie1 = addcookie1 ;
        this.serverurl = _commonservices.url;
        this.cookiedetails = this.addcookie.get('cookiedetails');
        this.usertype = this.addcookie1.get('usertype');
        console.log(this.cookiedetails);
        if (this.cookiedetails != '') {
           /* if (this.usertype == 0) {  // user
                this.router.navigateByUrl('/doctorlist');
            }
            if (this.usertype == 1) {  // admin
                this.router.navigateByUrl('/adminlist');
            }*/
             this.router.navigateByUrl('/dashboard');
        }
    }

    ngOnInit() {
        this.isSubmit = false;
        this.isemailvalidate = false;
        this.dataForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]});
    }

    dosubmit(formval) {
        let x: any;
        for (x in this.dataForm.controls) {
            this.dataForm.controls[x].markAsTouched();
        }
        this.is_error = 0;
        this.isSubmit = true;
        if (this.dataForm.valid) {
            let link  = this.serverurl + 'login';
            let data = {email: formval.email, password: formval.password};

            this._http.post(link, data)
                .subscribe(res => {
                    let result = res.json();
                    console.log(result);
                    if (result.status == 'success') {
                       // this.addcookie.set('cookiedetails', result.msg);    // Value of result.msg is inserted to userdetails
                        this.addcookie.set('cookiedetails', result.msg.personal_email);
                        this.cookiedetails = this.addcookie.get('cookiedetails');
                        console.log('after putobject ');
                        console.log(this.cookiedetails);
                        this.addcookie1.set('usertype', result.msg.type);
                        this.usertype = this.addcookie1.get('usertype');
                        console.log('after putobject9999999 ');
                        console.log(this.usertype);
                        if (this.usertype == 1) {   // admin
                            this.router.navigateByUrl('/dashboard');
                        }
                        if (this.usertype == 0) {  // user
                            this.router.navigateByUrl('/dashboard');
                        }
                    }
                    else {
                        this.is_error = result.msg;
                        //  this.router.navigate(['/addadmin']);
                    }

                }, error => {
                    console.log('Oooops!');
                });



        }
    }
}