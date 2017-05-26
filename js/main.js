$(document).ready(function() {

  // scroll
  // var $page = $('html, body');
  // $('a[href*="#"]').click(function() {
  //   $page.animate({
  //     scrollTop: $($.attr(this, 'href')).offset().top
  //   }, 400);
  //   return false;
  // });


  $(".top-header__nav-link").click(function() {
  	$(".top-header__nav-link").removeClass("top-header__nav-link_active");
  	$(this).addClass("top-header__nav-link_active");
  });


  $(".top-header__mobile-menu").click(function() {
  	$(this).toggleClass("change");
  	$(".top-header__nav").animate({ width: "toggle"}, 350);
  	$(".overley-page").fadeToggle();
  });


    $("#banner").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        smartSpeed: 500,
        nav: true,
        dots: true,
        navText: ['<div class="arrow arrow_left"><img src="img/arr_left.png"></div>', '<div class="arrow arrow_right"><img src="img/arr_right.png"></div>']
    });

    $("#recall-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        smartSpeed: 500,
        nav: true,
        dots: false,
        navText: ['<div class="arrow arrow_left"><img src="img/arr_left-white.png"></div>', '<div class="arrow arrow_right"><img src="img/arr_right-white.png"></div>']
    });


    // earn
    $(".earn__tab-content").not(":first").hide();
    $(".earn__tab-caption").click(function() {
        $(".earn__tab-caption").removeClass("earn__tab-caption_active").eq($(this).index()).addClass("earn__tab-caption_active");
        $(".earn__tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("earn__tab-caption_active");


    //credit page
    //conditions
    $(".conditions__tab-content").not(":first").hide();
    $(".conditions__tab-caption").click(function() {
        $(".conditions__tab-caption").removeClass("conditions__tab-caption_active").eq($(this).index()).addClass("conditions__tab-caption_active");
        $(".conditions__tab-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("conditions__tab-caption_active");


    $(".slider").slider({
        min: 0,
        max: 1000,
        values: [0, 500],
        range: true,
        animate: 500,
        stop: function(event, ui) {
            $("input#total").val($(".slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#total").val($(".slider").slider("values",1));
        }

    });

    $("input#total").change(function(){
        var value=$("input#total").val();
        $(".slider").slider("values",1,value);
    });

    $(".slider1").slider({
        min: 0,
        max: 1000,
        values: [0, 500],
        range: true,
        animate: 500,
        stop: function(event, ui) {
            $("input#time").val($(".slider1").slider("values",1));
        },
        slide: function(event, ui){
            $("input#time").val($(".slider1").slider("values",1));
        }

    });

    $("input#time").change(function(){
        var value=$("input#time").val();
        $(".slider1").slider("values",1,value);
    });



    $(".slider2").slider({
        min: 0,
        max: 1000,
        values: [0, 500],
        range: true,
        animate: 500,
        stop: function(event, ui) {
            $("input#income").val($(".slider2").slider("values",1));
        },
        slide: function(event, ui){
            $("input#income").val($(".slider2").slider("values",1));
        }

    });

    $("input#income").change(function(){
        var value=$("input#income").val();
        $(".slider2").slider("values",1,value);
    });


    $(".ui-slider-handle").mousedown(function() {
        $(".ui-widget-header").addClass("ui-widget-header_active");
        $(this).addClass("ui-slider-handle_active");
    });

    $('.c-info_link').on('click', function(e){
        e.preventDefault()
        $('.c-info .c-info_item').toggleClass('c-info-show');
        var $text = $('.c-info_link').text();
        console.log($text);
        if($text == "Подробнее"){
          $('.c-info_link a').text('Скрыть');
        }else{
            $('.c-info_link a').text('Подробнее');
        }
    });



});

//tooltipe

$( function()
{
    var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;

    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );

        if( !tip || tip == '' )
            return false;

        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
            .html( tip )
            .appendTo( 'body' );

        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 3 );
            else
                tooltip.css( 'max-width', 340 );

            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;

            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );

            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );

            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );

            tooltip.css( { left: pos_left, top: pos_top } )
                .animate( { top: '+=10', opacity: 1 }, 50 );
        };

        init_tooltip();
        $( window ).resize( init_tooltip );

        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });

            target.attr( 'title', tip );
        };

        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });


    //для админ панели
    $(window).scroll(function() {

        if (window.pageYOffset == 0) {
            $('header.top-header').removeClass('fixed');
        }
        else {
            $('header.top-header').addClass('fixed');
        }
    });

//табы

    $(".tab_content").hide();
    $(".tab_content:first").show();

//tab mode

    $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#"+activeTab).fadeIn();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

        $(".tab-accordion_heading").removeClass("d_active");
        $(".tab-accordion_heading[rel^='"+activeTab+"']").addClass("d_active");


        // target= $('.tabs');
        // $('html,body').animate({
        //     scrollTop: target.offset().top
        // }, 1000);

    });

    /* acoordion mode */

    $(".tab-accordion_heading").click(function() {

        $(this).siblings('.tab-accordion_heading').removeClass('tab-accordion_active');
        $(this).addClass('tab-accordion_active');
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#"+d_activeTab).fadeIn();

        $(".tab-accordion_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");

        if ( $( this ).hasClass( "d_active" ) ) {
            $(this).removeClass("d_active");
            $("#"+d_activeTab).fadeIn();
        }


    });



//вопросы и ответы для страницы МТС Деньги. Вклад

    $(".faq_question").click(function(e) {
        e.preventDefault();
        $(this).toggleClass('faq_active');
        $(this).parents(".faq_item").find(".faq_answer").slideToggle();
    });

});
