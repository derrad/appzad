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
    

    function htmlbodyHeightUpdate() {
      var height3 = $(window).height();
      var height1 = $('.nav').height() + 50;
     var height2 = $('.container-main').height();
      if (height2 > height3) {
          $('html').height(Math.max(height1, height3, height2) + 10);
          $('body').height(Math.max(height1, height3, height2) + 10);
      } else
      {
          $('html').height(Math.max(height1, height3, height2));
          $('body').height(Math.max(height1, height3, height2));
      }
  
  }
  $(document).ready(function () {
      htmlbodyHeightUpdate();
      $(window).resize(function () {
          htmlbodyHeightUpdate();
      });
      $(window).scroll(function () {
          var height2 = $('.container-main').height();
          htmlbodyHeightUpdate();
      });
  });


  }
  

}
