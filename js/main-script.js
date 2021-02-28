/*glopal $, alert, console*/
$(function(){
    'use strict';
    //////////////////////// nav link scroll //////////
    // ////////////////////////////////////////////////
    $("nav .inside-links > ul > li").on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop : $("#" + $(this).data('scroll')).offset().top 
        }, 100);
    });

    /************************************************/
    /********************** nav menu ****************/
    var menu_div = $("nav .inside-links");
    $("nav .bars").on("click", function(){
        if($(menu_div).css("display") == "none") {
            if($("html").attr("lang") == "ar") {
                $("nav .bars > span:nth-child(2)").animate({
                    right: 0
                },300);
            }
            else {
                $("nav .bars > span:nth-child(2)").animate({
                    left: 0
                },300);
            }
            
            menu_div.show(300);
        }
        else {
            menu_div.hide(300);
            if($("html").attr("lang") == "ar") {
                $("nav .bars > span:nth-child(2)").animate({
                    right: -4
                },300);
            }
            else {
                $("nav .bars > span:nth-child(2)").animate({
                    left: -4
                },300);
            }
        }
    });
    /*************************************************/
    $(window).resize(function(){
        var sw = $(window).innerWidth();
        if(sw > 750) {
            $(menu_div).show();
        }
        else {
            $(menu_div).hide();
        }
    });
    /*************************************************/
    /**************************************/
    /**************************************/
    var sw = $(window).innerWidth();
    $("nav .inside-links > ul > li > a").on("click", function() {
        if(sw <= 767) {
            $(menu_div).hide(100);

            if($("html").attr("lang") == "ar") {
                $("nav .bars > span:nth-child(2)").animate({
                    right: -4
                },300);
            }
            else {
                $("nav .bars > span:nth-child(2)").animate({
                    left: -4
                },300);
            }

        }
    });
    
    $(window).resize(function(){
        sw = $(window).innerWidth();
        $("nav .inside-links > ul > li > a").on("click", function() {
            if(sw <= 767) {
                $(menu_div).hide(100);

                if($("html").attr("lang") == "ar") {
                    $("nav .bars > span:nth-child(2)").animate({
                        right: -4
                    },300);
                }
                else {
                    $("nav .bars > span:nth-child(2)").animate({
                        left: -4
                    },300);
                }
            }
        });
        if(sw > 767) {
            $(menu_div).show();
        }
    });










    /******  counter  , CounterFactory ******/
    var check = true;
    $(window).scroll(function(){

        if($(window).scrollTop() > $(".counter").offset().top - 350 && check){
            check = false;
            $('.timer').countTo({
                from: 0,
                speed: 3500
            });
        }
    });
    
    
    


    /*buttom-top*/ 
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 800){
            scrollButton.show(500);
        }
        else{
            scrollButton.hide(500);   
        }
    });
    
    scrollButton.click(function(){
        $("html, body").animate({ scrollTop: 0}, 500);
    });


    // magic carousel
    $('#cascade-slider').cascadeSlider({
      
    });
    /*************************/
    /*************************/
    
});