import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
declare  var $: any;

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // title = 'app works!';

  public url;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        let curUrlTree = this.router.parseUrl(this.router.url);
        console.info(this.router.url);
        this.url = this.router.url;
        $('.ssd ').removeClass('active');
        if (this.url == '/') {
          $('.ssd ').eq(0).addClass('active');
        }
        if (this.url == '/conventioncenter') {
          $('.ssd ').eq(1).addClass('active');
        }
        if (this.url == '/travellodging') {
          $('.ssd ').eq(2).addClass('active');
        }
        if (this.url == '/agenda') {
          $('.ssd ').eq(3).addClass('active');
        }
        if (this.url == '/presenters') {
          $('.ssd ').eq(4).addClass('active');
        }
        if (this.url == '/buytickets') {
          $('.ssd ').eq(7).addClass('active');
        }
       if (this.url == '/boothtable') {
        $('.ssd ').eq(5).addClass('active');
       }

       if (this.url == '/readers') {
              $('.ssd ').eq(6).addClass('active');
          }


          if (this.url == '/sponsor') {
          $('.ssd ').eq(7).addClass('active');
        }
        if (this.url == '/aboutspiritcon') {
          $('.ssd ').eq(9).addClass('active');
        }
        if (this.url == '/buybooth') {
          $('.ssd ').eq(10).addClass('active');
        }
        if (this.url == '/past-events') {
          $('.ssd ').eq(11).addClass('active');
        }
        if (this.url == '/contactus') {
          $('.ssd ').eq(12).addClass('active');
        }


      }
    });
  }
}
