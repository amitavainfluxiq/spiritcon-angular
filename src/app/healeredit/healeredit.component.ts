import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Commonservices} from '../app.commonservices' ;

@Component({
  selector: 'app-healeredit',
  templateUrl: './healeredit.component.html',
  styleUrls: ['./healeredit.component.css'],
    providers: [Commonservices],
})
export class HealereditComponent implements OnInit {
    public dataForm: FormGroup ;
    public fb;
    public isSubmit;
    id: number;
    public serverurl;
    public ckeditorContent;
    public errckeditor;

    constructor(fb: FormBuilder, private _http: Http, private router: Router, private route: ActivatedRoute, private _commonservices: Commonservices) {
        this.fb = fb;
        this.ckeditorContent = '';
        this.serverurl = _commonservices.url;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
            this.getdetails();
        });

        this.isSubmit = false;

        this.dataForm = this.fb.group({
            table_no: ['', Validators.required],
            business_name: ['', Validators.required],
            description: [''],
            email: [''],
            phone: [''],
            website: [''],
            year_2018: [''],
            year_2019: [''],
            year_2020: [''],

        });
    }
    onChange(event: any) {
        this.dataForm.patchValue({description: this.ckeditorContent});

    }

    getdetails() {
        let link = this.serverurl + 'healerdetails';
        let data = {_id : this.id};
        this._http.post(link, data)
            .subscribe(res => {
                let result = res.json();
                console.log(result);
                console.log(result.status);
                if (result.status == 'success' && typeof(result) != 'undefined') {
                    let l_year_2018;
                    let l_year_2019;
                    let l_year_2020;
                    console.log(result.description);
                    let userdet = result.res[0];
                    console.log('userdet',userdet);
                    this.ckeditorContent = userdet.description;
                    if(userdet.year_2018==1){
                        l_year_2018=true;
                    }else{
                        l_year_2018 = false;
                    }
                    if(userdet.year_2019==1){
                        l_year_2019=true;
                    }else{
                        l_year_2019 = false;
                    }
                    if(userdet.year_2020==1){
                        l_year_2020=true;
                    }else{
                        l_year_2020 = false;
                    }
                    (<FormControl>this.dataForm.controls['table_no']).setValue(userdet.table_no);
                    (<FormControl>this.dataForm.controls['business_name']).setValue(userdet.business_name);
                    (<FormControl>this.dataForm.controls['email']).setValue(userdet.email);
                    (<FormControl>this.dataForm.controls['phone']).setValue(userdet.phone);
                    (<FormControl>this.dataForm.controls['website']).setValue(userdet.website);
                    (<FormControl>this.dataForm.controls['year_2018']).setValue(l_year_2018);
                    (<FormControl>this.dataForm.controls['year_2019']).setValue(l_year_2019);
                    (<FormControl>this.dataForm.controls['year_2020']).setValue(l_year_2020);
                }else {
                     this.router.navigate(['/healerlist']);
                }
            }, error => {
                console.log('Ooops');
            });
    }

    dosubmit(formval) {
        console.log(this.ckeditorContent);
        if (this.ckeditorContent == null) {
            this.errckeditor = 'Give description..!';
        }
        else {
            this.errckeditor = null;
        }
        this.isSubmit = true;
        if (this.dataForm.valid) {
            let l_year_2018;
            let l_year_2019;
            let l_year_2020;
            if(formval.year_2018==true){
                l_year_2018=1;
            }else{
                l_year_2018 = 0;
            }
            if(formval.year_2019==true){
                l_year_2019=1;
            }else{
                l_year_2019 = 0;
            }

            if(formval.year_2020==true){
                l_year_2020=1;
            }else{
                l_year_2020 = 0;
            }
            let link= this.serverurl + 'edithealer';
            let data = {
                id: this.id,
                table_no: formval.table_no,
                business_name: formval.business_name,
                email: formval.email,
                description: this.ckeditorContent,
                website: formval.website,
                phone: formval.phone,
                year_2018: l_year_2018,
                year_2019: l_year_2019,
                year_2020: l_year_2020,
            };
            console.log(data);
            this._http.post(link, data)
                .subscribe(data => {
                    this.router.navigate(['/healerlist']);
                }, error => {
                    console.log('Oooops!');
                });
        }
    }
}