    import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Http} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import {NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
    providers: [Commonservices],
})
export class ContactusComponent implements OnInit {
    public dataForm: FormGroup;
    public fb;
    public passmatchvalidate;
    public serverurl;
    static invalidemail;
    static blankemail;
    public isModalShown3: boolean = false;
    public isModalShown: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShown5: boolean = false;
    public isModalShown10: boolean = false;
    public isModalShowncom1: boolean = false;
    public isModalShowncom2: boolean = false;

    constructor(fb: FormBuilder, private _http: Http, private router: Router, private _commonservices: Commonservices) {
        this.fb = fb;
        this.serverurl = _commonservices.url;
        ContactusComponent.blankemail = false;
        ContactusComponent.invalidemail = false;
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    ngOnInit() {
        this.passmatchvalidate = false;
        this.dataForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, ContactusComponent.validateEmail])],
            subject: ['', Validators.required],
            message: ['', Validators.required],
            phone: [''],
        });
    }


    static validateEmail(control: FormControl) {
        ContactusComponent.blankemail = false;
        ContactusComponent.invalidemail = false;

        if (control.value == '' || control.value == null) {
            ContactusComponent.blankemail = true;
            return {'invalidemail': true};
        }
        if (!control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            ContactusComponent.invalidemail = true;
            return {'invalidemail': true};
        }
    }

    getemail(type: any) {
        // console.log('t '+type);
        if (type == 'invalid') {
            return ContactusComponent.invalidemail;
        }
        if (type == 'blank') {
            return ContactusComponent.blankemail;
        }
    }

    dosubmit(formval) {
        let x: any;
        for (x in this.dataForm.controls) {
            this.dataForm.controls[x].markAsTouched();
        }
        console.log('inside submit');
        if (this.dataForm.valid && (ContactusComponent.invalidemail == false || ContactusComponent.blankemail == false)) {
            console.log('inside dataformvalid');
            let link = this.serverurl + 'contactus';
            let data = {
                name: formval.name,
                email: formval.email,
                subject: formval.subject,
                message: formval.message,
                phone: formval.phone
            };
            console.log(data);
            this._http.post(link, data)
                .subscribe(res => {
                    let result = res.json();
                    if (result.status == 'success') {
                        this.dataForm.reset();
                        this.isModalShown = true;

                        setTimeout(() => {
                            this.isModalShown = false;
                        }, 2000);
                    }
                }, error => {
                    console.log('Oooops!');
                });
        }
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

    callbuyticket() {
        this.isModalShown3 = true;
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