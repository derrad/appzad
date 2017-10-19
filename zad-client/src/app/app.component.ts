import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Omladinske zadruge';
  
  ngOnInit() {

    // $(document).ready(function () {

      // var litriger = $('.listav');
    
      //  litriger.click(function () {
      //   li_hamburger_cross();      
      //  });
    
        // var trigger = $('.hamburger'),
        //    overlay = $('.overlay'),
        //   isClosed = false;

        //  trigger.click(function () {
        //    hamburger_cross();      
        //  });

      //  function li_hamburger_cross() {
        
      //       if (isClosed == true) {          
      //         overlay.hide();
      //         litriger.removeClass('is-open');
      //         litriger.addClass('is-closed');
      //         isClosed = false;
      //       } else {   
      //         overlay.show();
      //         litriger.removeClass('is-closed');
      //         litriger.addClass('is-open');
      //         isClosed = true;
      //       }
      //   }
          

     
    
    //     function hamburger_cross() {
    
    //       if (isClosed == true) {          
    //         overlay.hide();
    //         trigger.removeClass('is-open');
    //         trigger.addClass('is-closed');
    //         isClosed = false;
    //       } else {   
    //         overlay.show();
    //         trigger.removeClass('is-closed');
    //         trigger.addClass('is-open');
    //         isClosed = true;
    //       }
    //   }
      
    //   $('[data-toggle="offcanvas"]').click(function () {
    //         $('#wrapper').toggleClass('toggled');
    //   });  
    // });
    
    // (function($) {
    //     "use strict"; // Start of use strict
    //     console.log("pozvao sam fukciju za meni");
    //     // Configure tooltips for collapsed side navigation
    //     // $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    //     //   template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    //     // })
    //     // Toggle the side navigation
    //     $("#sidenavToggler").click(function(e) {
    //       e.preventDefault();
    //       $("body").toggleClass("sidenav-toggled");
    //       $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    //       $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
    //     });
    //     // Force the toggled class to be removed when a collapsible nav link is clicked
    //     $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    //       e.preventDefault();
    //       $("body").removeClass("sidenav-toggled");
    //     });
    //     // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    //     $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    //       var e0 = e.originalEvent,
    //         delta = e0.wheelDelta || -e0.detail;
    //       this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    //       e.preventDefault();
    //     });
    //     // Scroll to top button appear
    //     $(document).scroll(function() {
    //       var scrollDistance = $(this).scrollTop();
    //       if (scrollDistance > 100) {
    //         $('.scroll-to-top').fadeIn();
    //       } else {
    //         $('.scroll-to-top').fadeOut();
    //       }
    //     });
    //     // Configure tooltips globally
    // //    $('[data-toggle="tooltip"]').tooltip();
    //     // Smooth scrolling using jQuery easing
    //     $(document).on('click', 'a.scroll-to-top', function(event) {
    //       var $anchor = $(this);
    //       $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top)
    //       }, 1000, 'easeInOutExpo');
    //       event.preventDefault();
    //     });

    //   })(); // End of use strict



//     function htmlbodyHeightUpdate() {
//       var height3 = $(window).height();
//       var height1 = $('.nav').height() + 50;
//      var height2 = $('.container-main').height();
//       if (height2 > height3) {
//           $('html').height(Math.max(height1, height3, height2) + 10);
//           $('body').height(Math.max(height1, height3, height2) + 10);
//       } else
//       {
//           $('html').height(Math.max(height1, height3, height2));
//           $('body').height(Math.max(height1, height3, height2));
//       }
  
//   }
//   $(document).ready(function () {
//       htmlbodyHeightUpdate();
//       $(window).resize(function () {
//           htmlbodyHeightUpdate();
//       });
//       $(window).scroll(function () {
//           var height2 = $('.container-main').height();
//           htmlbodyHeightUpdate();
//       });
//   });


  }
  

}
