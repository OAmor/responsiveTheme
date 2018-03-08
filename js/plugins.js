/*global $, alert , console */

$(document).ready(function () {

    'use strict';
    
    $('.carousel').carousel({
        interval: 200000
    });
    
    $('.test .carousel').carousel({
        interval: 100
    });
    
    $('.test .carousel-indicators li').click(function () {
        
        $(this).addClass('active').siblings().removeClass();
        
    });
    
    /* Show Option Box  */
    
    $('.gear').click(function () {
        
        $('.color').slideToggle();
        
    });
    
    /* Option Box Color */
    
    
    $('.option li').eq(0).css('backgroundColor', '#df9a02').end().eq(1).css('backgroundColor', '#e41b17').end().eq(2).css('backgroundColor', '#0895d1').end();
    
    /* Change Color */
    
    $('.option li').eq(0).click(function () {
        
        $('.theme').attr('href', 'css/default_theme.css');
        
    });
    
    $('.option li').eq(1).click(function () {
        
        $('.theme').attr('href', 'css/yellow_theme.css');
        
    });
    
    $('.option li').eq(2).click(function () {
        
        $('.theme').attr('href', 'css/blue_theme.css');
        
    });
    
    /* Start Scroll To Top */
    
    $(window).scroll(function () {
        
        console.log($(this).scrollTop());
        
        if ($(this).scrollTop() > 800) {
            
            $('.scroll').fadeIn();
            
        } else {
            $('.scroll').fadeOut();
        }
    
    });
    
    /* Trigger The Scroll To Top */
    
    $('.scroll').click(function () {
        
        $('html,body').animate({scrollTop: 0});
        
    });
 
});


