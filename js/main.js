$(function () {
   "use strict";

   var musk = $(".musk"),
       triggle_button = $(".triggle-button"),
       sider_bar = $(".side-bar"),
       back_top = $(".back-to-top");

   function show() {
       musk.fadeIn();
       sider_bar.animate({right:0});
   }
   function hide() {
       musk.fadeOut();
       sider_bar.animate({"right":-sider_bar.width()})
   }
   triggle_button.on("click", show);
   musk.on("click",hide);

   $(window).on("scroll",function () {
       if($(window).scrollTop()>$(window).height()){
            back_top.fadeIn();
       }else {
           back_top.fadeOut();
       }
   });

   back_top.on("click",function () {
       $("html,body").animate({scrollTop: "0"},800);
   })

   $(window).trigger("scroll");

});