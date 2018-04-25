			jQuery(document).ready(function(){

				var fullPageCreated = false;

				createFullpage();

				mobileHeader();



                  	if ($(window).width() < 990) {

					    fullPageCreated = false;    

					    $.fn.fullpage.destroy('all');

				        jQuery(window).bind('scroll', function(){

					        if ($(this).scrollTop() > 32) {

					        	$("header").addClass("fixed");

					        } else if ($(this).scrollTop() == 0) {

					        	$("header").removeClass("fixed");

					        }

					    });

                  	}

                  	

					$(window).resize(function(){

	                  	if ($(window).width() < 990) {

						    fullPageCreated = false;    

						    $.fn.fullpage.destroy('all');

	                  	} else {

	                  		createFullpage();

	                  		$(".on").removeClass("on");

	                  	}

					});



					function mobileHeader(){

		              	$("header .flex60").click(function(){

		                  if ($( window).width() < 990) {

		                    $(".menuMobile").toggleClass("on");

		                    if($('.menuMobile').hasClass("on")){

		                    	$("header").addClass("on");

		                    } else {

		                    	$("header").removeClass("on");

		                    }

		                  }

		              	});

				        jQuery(window).bind('scroll', function(){

				        	if ($(this).scrollTop() > 32) {

					        	$("header").addClass("fixed");

					        } else {

					        	$("header").removeClass("fixed");

					        }

					    });

						var lastScrollTop = 0;

						$( window).scroll(function(event){

						   var st = $(this).scrollTop();

						   if (st > lastScrollTop){

		                    $(".on").removeClass("on");

						   } else {

		                    $(".on").removeClass("on");

						   }

						   lastScrollTop = st;

						});

	                    $( "nav a" ).click(function() {

	                    	if ($( window).width() < 990) {

	                            var navlink = $(this).attr("data-menuanchor");

	                            $('html, body').stop(true, false).animate({

	                                scrollTop: $("[id='"+navlink+"']").offset().top 

	                            }, 500);

	                        }

	                    });

					}



					function createFullpage() {

					    if(fullPageCreated === false) {

					        fullPageCreated = true;

			                $('main').fullpage({

								navigation: true,

								navigationPosition: 'right',

			                  	sectionsColor: ['#4b99d9', '#ffffff', '#3b3d40', '#ffffff', '#ededed', '#2e71f2', '#ffffff', '#3b3d40'],

								afterLoad: function(anchorLink, index){

									if(index >= 2 && index != 6 && index != 3){

										$("header").addClass("fixed");

										$("#fp-nav").addClass("dark");

									} else {

										$("header").removeClass("fixed");

										$("#fp-nav").removeClass("dark");

									}

								}

			                });	

					    }

					}

					





			

				var $window = $(window),

			    flexslider;

			 

				  function getGridSize() {

				    return (window.innerWidth < 990) ? 1 :

				           (window.innerWidth > 990) ? 2 : 0;

				  }

				 

				  $(function() {

				    SyntaxHighlighter.all();

				  });

				 

				  $window.load(function() {

				    $('.depoimentos').flexslider({

				      animation: "slide",

				      animationLoop: false,

				      itemWidth: 450,

				      minItems: getGridSize(),

				      maxItems: getGridSize(),

				      controlNav:false

				    });

				  });

				 

				  $window.resize(function() {

				    var gridSize = getGridSize();

				 

				    flexslider.vars.minItems = gridSize;

				    flexslider.vars.maxItems = gridSize;



				  });

			});	

