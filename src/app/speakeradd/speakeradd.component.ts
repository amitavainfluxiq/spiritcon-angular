import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Http} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Commonservices} from '../app.commonservices' ;
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
declare var moment: any;

@Component({
  selector: 'app-speakeradd',
  templateUrl: './speakeradd.component.html',
  styleUrls: ['./speakeradd.component.css'],
    providers: [Commonservices],
})
export class SpeakeraddComponent implements OnInit {

    public configData: any = {
        baseUrl: "https://fileupload.influxhostserver.com/",
        endpoint: "uploads",
        size: "51200", // kb
        format: ["jpg", "jpeg", "png"], // use all small font
        type: "profile-picture",
        path: "file",
        prefix: "_profile_picture",
        formSubmit: false,
        conversionNeeded: 0,
        bucketName: "spritcon-images"
    };

    public dataForm: FormGroup;
    private fb;
    public serverurl;
    public ckeditorContent;
    public errckeditor;
    public ErrCode: boolean = false;
    public imageErrCode: boolean = false;

    options: UploaderOptions;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;
    private zone: NgZone;
    public disableuploader: any = 0;
    public basicOptions: Object;

    constructor(fb: FormBuilder, private _http: Http, private router: Router, private _commonservices: Commonservices) {
        this.fb = fb;
        this.ckeditorContent = '';
        this.serverurl = _commonservices.url;

        this.files = []; // local uploading files array
        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
      //  var date = moment();
    }

    ngOnInit() {

        this.dataForm = this.fb.group({
            speaker_name: ['', Validators.required],
            description: [''],
            subjects_covered: [''],
            start_date_time: [''],
            end_date_time: [''],
            year_2018: [''],
            year_2019: [''],
            year_2020: [''],
        });
        this.zone = new NgZone({enableLongStackTrace: false});
        this.basicOptions = {
            url: this.serverurl + 'uploads',
            filterExtensions: false,
            allowedExtensions: ['jpg', 'jpeg', 'png']

        };
    }
    onChange(event: any) {
        this.dataForm.patchValue({description: this.ckeditorContent});

    }

    dosubmit(formval) {
        let x: any;
        for (x in this.dataForm.controls) {
            this.dataForm.controls[x].markAsTouched();
        }

        if (this.configData.files) {

            if (this.configData.files.length > 1) { this.ErrCode = true; return; }
            formval.inventory_image =
                {
                    "basepath": this.configData.files[0].upload.data.basepath,
                    "image": this.configData.files[0].upload.data.data.fileservername,
                    "name": this.configData.files[0].name,
                    "type": this.configData.files[0].type
                };
        } else {
            formval.inventory_image = false;
            this.imageErrCode = true;
            // if (this.action == 'edit')
                // this.addinventorylistingquoteForm.value.inventory_image = this.defaultData.inventory_image;
        }


        // console.log(this.configData.files);


        console.log(formval.start_date_time);
        formval.start_date_time = moment(formval.start_date_time).format("YYYY-MM-DD HH:mm:ss");
        //console.log(dateTimev);
        console.log('subjects covered');
        var subjects_covered_array = formval.subjects_covered.split(',');
        console.log(subjects_covered_array);
        let file= this.files;
        console.log('file=========');
        console.log(file);
        let sfilename = [];
        let uploadedfilename = [];
        for (let i in file) {
            sfilename.push(file[i].response);
            uploadedfilename.push(file[i].name);
        }

        if (this.ckeditorContent == null) {
            this.errckeditor = 'Give description..!';
        }
        else {
            this.errckeditor = null;
        }
        console.log('inside submit');
        if (this.dataForm.valid && this.ckeditorContent != null) {
            console.log('inside dataformvalid');
            console.log(formval.start_date_time);
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
            let link = this.serverurl + 'addspeaker';
            let data = {
                speaker_name: formval.speaker_name,
                description: this.ckeditorContent,
                servername: JSON.stringify(sfilename),
                uploadedfilename: JSON.stringify(uploadedfilename),
                subjects_covered: subjects_covered_array,
                start_date_time: formval.start_date_time,
                end_date_time: formval.end_date_time,
                year_2018: l_year_2018,
                year_2019: l_year_2019,
                year_2020: l_year_2020,
                image:formval.inventory_image
            };
            console.log(data);
            this._http.post(link, data)
                .subscribe(res => {
                    let result = res.json();
                    if (result.status == 'success') {
                        console.log('done');
                        this.router.navigate(['/speakerlist']);
                    }
                }, error => {
                    console.log('Oooops!');
                });
        }
    }
    // onUploadOutput(output: UploadOutput): void {
    //     setTimeout(()=> {
    //         // alert(8);
    //         if (output.type === 'allAddedToQueue') { // when all files added in queue
    //             // uncomment this if you want to auto upload files when added
    //             this.disableuploader = 1;
    //             console.log('this.disableuploader === before');
    //             console.log(this.disableuploader);
    //             //  setTimeout(()=> {
    //             const event: UploadInput = {
    //                 type: 'uploadAll',
    //                 url: this.serverurl + 'uploads',
    //                 method: 'POST',
    //             };
    //             this.uploadInput.emit(event);
    //             //   },200);
    //         } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
    //             setTimeout(()=> {    // <<<---    using ()=> syntax
    //                 console.log('output.file[0].response');
    //                 console.log(output.file.response);
    //                 console.log(output.file);
    //                 console.log(output.file);
    //                 // this.files.push(output.file);
    //                 if(output.file.response!="") {
    //                     // alert(7);
    //                     console.log('output.file-------------------');
    //                     console.log(output.file);
    //                     console.log(output.file.response);
    //                     // console.log(output.file[0].response);
    //                     this.files=[];
    //                     this.files.push(output.file);
    //                 }
    //                 this.disableuploader = 0;
    //                 console.log('this.disableuploader after');
    //                 console.log(this.disableuploader);
    //                 // alert(22);
    //                 // console.log(this.files);
    //                 console.log('this.files');
    //                 console.log(this.files);
    //                 // alert(55);
    //                 //  console.log(output.file[0].response);
    //             },300);
    //         } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
    //             // alert(9);
    //             console.log(this.files);
    //             // update current data in files array for uploading file
    //             const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
    //             this.files[index] = output.file;
    //         } else if (output.type === 'removed') {
    //             // remove file from array when removed
    //             this.files = this.files.filter((file: UploadFile) => file !== output.file);
    //         } else if (output.type === 'dragOver') {
    //             this.dragOver = true;
    //         } else if (output.type === 'dragOut') {
    //             this.dragOver = false;
    //         } else if (output.type === 'drop') {
    //             this.dragOver = false;
    //         }
    //         /*console.log('files??');
    //         console.log(this.files);*/
    //         this.dataForm.patchValue({servername: this.files});
    //     },200);
    // }
    // startUpload(): void {
    //     const event: UploadInput = {
    //         type: 'uploadAll',
    //         url: 'http://ngx-uploader.com/upload',
    //         method: 'POST',
    //         data: { foo: 'bar' }
    //     };
    //
    //     this.uploadInput.emit(event);
    // }

    deleteimage1(counter: any) {
        this.files.splice(counter,1);
    }
}
