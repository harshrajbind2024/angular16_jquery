import { Component } from '@angular/core';
// import * from 'jquery',
// import * as $ from 'jquery'
// import $ from 'jquery';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'useJquery';

  public ngOnInit(){
    $(document).ready(function(){
      $("button").click(function(){
        var div=$("div");
        div.animate({left:'1000px'},"slow");
        div.animate({fontSize:'5em'},"slow");
      }
    )
    })

    $(document).ready(() => {
      console.log('Document is ready!');
  });

  // work
  $(function () {
    console.log('Document is ready! ');
    
});

  // work
$(function(){
  var div=$("div");
  div.animate({left:'1000px'},"slow");
  div.animate({fontSize:'5em'},"slow");
}
)

  }
  
}
