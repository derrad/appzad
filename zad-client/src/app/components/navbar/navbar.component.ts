import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService:AuthService,
    private router:Router ,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  
   // console.log("pozvao sam fukciju za meni");
    // Configure tooltips for collapsed side navigation
    //  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    //    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    //  })
    // Toggle the side navigation
    // $("#sidenavToggler").click(function(e) {
    //   e.preventDefault();
    //   $("body").toggleClass("sidenav-toggled");
    //   $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    //   $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
    // });
    // Force the toggled class to be removed when a collapsible nav link is clicked
    // $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    //   e.preventDefault();
    //   $("body").removeClass("sidenav-toggled");
    // });
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    // $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    //   var e0 = e.originalEvent,
    //     delta = e0.wheelDelta || -e0.detail;
    //   this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    //   e.preventDefault();
    // });
    // // Scroll to top button appear
    // $(document).scroll(function() {
    //   var scrollDistance = $(this).scrollTop();
    //   if (scrollDistance > 100) {
    //     $('.scroll-to-top').fadeIn();
    //   } else {
    //     $('.scroll-to-top').fadeOut();
    //   }
    // });
    // // Configure tooltips globally
//    $('[data-toggle="tooltip"]').tooltip();
    // Smooth scrolling using jQuery easing
    // $(document).on('click', 'a.scroll-to-top', function(event) {
    //   var $anchor = $(this);
    //   $('html, body').stop().animate({
    //     scrollTop: ($($anchor.attr('href')).offset().top)
    //   }, 1000, 'easeInOutExpo');
    //   event.preventDefault();
    // });

  
  }




  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
       cssClass:'alert-success',
       timeout: 3000
     });

    this.router.navigate(['/login']);
    return false;
  } 

  onClickHelp(){
  // alert("Provera help-a");
    this.flashMessage.show('Trebalo bi help da prikazemo', {
      cssClass:'alert-success',
      timeout: 3000
    });
    // this.messageService.add({severity:'info', summary:'Help info', detail:'Trebalo bi help da prikazemo'});
    return false;
  }

  onClickQuickMenu(){
    // alert("Provera help-a");
      this.flashMessage.show('Trebalo quick menu da prikazemo', {
        cssClass:'alert-success',
        timeout: 3000
      });
      // this.messageService.add({severity:'info', summary:'Help info', detail:'Trebalo bi help da prikazemo'});
      return false;
    }

}
