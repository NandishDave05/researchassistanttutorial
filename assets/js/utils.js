$(document).ready(function(){
	$(".print").click(function(){
		window.print();
	});

	function pageNavigation(){
		var $btnPrevious = $(".btn-previous");
		var $btnNext = $(".btn-next");

		var $currentPage = $("body").data("page");
		var $lastPage = $("body").data("page-last");

		var _previousPage = $currentPage - 1;
		var _nextPage = $currentPage + 1;

		if($currentPage == 1){
			$btnPrevious.css('display','none');
		}
		if($lastPage == 'last') {
			$btnNext.css('display','none');
		}
		if($currentPage > 9){
			$btnNext.attr('href', _nextPage+'.html');
			if($currentPage == 10){
				$btnPrevious.attr('href', '0'+_previousPage+'.html');
			} else{
				$btnPrevious.attr('href', _previousPage+'.html');
			}
		} else if($currentPage == 9){
			$btnPrevious.attr('href', '0'+_previousPage+'.html');
			$btnNext.attr('href', _nextPage+'.html');

		}else {
			$btnNext.attr('href', '0'+_nextPage+'.html');
			$btnPrevious.attr('href', '0'+_previousPage+'.html');
		}
	}
	
	pageNavigation();

	function updateTitle(){
      var title = $(".section-title").text();
      var  span = $(window.parent.document.getElementById("pageTitleText"));
      $(span).text(title);
    }

    var  framework = $(window.parent.document.getElementById("cleanSlate"));
	if(framework.length){
	    updateTitle();
	}

	/*
		FIX: FORCE BLACKBOARD TO GO TO THE TOP OF PAGE ON BACK/NEXT BUTTON CLICK
		*/
		function pageNavigationScrollTop(){
			$(".btn-previous, .btn-next").click(function(){
				window.parent.scroll(0,0);
			})
		}
		pageNavigationScrollTop();

		function radioQuiz(){
			$(".radio-submit").click(function(){
				$(".radio-quiz").each(function(){
					var selected = $(this).find('input:checked').val();

					if(selected == 'y'){
						$(this).find('.alert-danger').stop().fadeOut(200, function(){
							$(this).siblings('.alert-success').stop().fadeIn(200)
						});
					} else {
						$(this).find('.alert-success').stop().fadeOut(200, function(){
							$(this).siblings('.alert-danger').stop().fadeIn(200)
						});
					}
				})

				return false;
			})
		}
		radioQuiz();

		function selectQuiz(){
			$(".select-quiz select").each(function(){
				$(this).change(function(){
					if($(this).val() == 'y'){
						$(this).closest('.select-quiz').find('.alert-danger').stop().fadeOut(200, function(){
							$(this).siblings('.alert-success').stop().fadeIn(200)
						});
					} else {
						$(this).closest('.select-quiz').find('.alert-success').stop().fadeOut(200, function(){
							$(this).siblings('.alert-danger').stop().fadeIn(200)
						});
					}
				});
			})
		}
		selectQuiz();

		function resizeCanvas(){
			var newHeight = $("#large-header").height();
			$("#large-header canvas#demo-canvas").height(newHeight)
		}
		resizeCanvas();

		/* MATCH HEIGHT ELEMENTS */
		function matchHeightInit(){
			if($(".items-container").length){
				$(".items-container [data-matchHeight=1]").matchHeight();
				$(".items-container [data-matchHeight=2]").matchHeight();
				$(".items-container [data-matchHeight=3]").matchHeight();
				$(".items-container [data-matchHeight=4]").matchHeight();
				$(".items-container [data-matchHeight=5]").matchHeight();
			}

		}
		matchHeightInit();

		function carouselInit(){
			$(".carousel-notransition").owlCarousel({
		      navigation : true, // Show next and prev buttons
		      slideSpeed : 0,
		      pagination : true,
		      autoHeight:true,
		      autoPlay:false,
		      addClassActive : true,
		      navigationText: false,
		      singleItem:true,
		      rewindNav:false
		  });
		}
		carouselInit();



		function fixA1(){
			var a = $("#accordion").find("div.panel-heading");

			for(var i =0;i < a.length; i++){
				var item = a.eq(i);
				var collapse = item.parent().is("a");
				if (!item.parent().is("a")){
					var href="#"+item.next().attr("id"); 
					var newhtml = "<a data-toggle=\"collapse\" href=\""+href+"\"></a>";

					item.wrap(newhtml);
				}

			}

		}
		fixA1();
		function forceResponsive(){
			
			if(window.parent.document.getElementById("cleanSlate")){
				var framework = window.parent.document.getElementById("cleanSlate");
				var frameworkParent = window.parent.parent.document.getElementById("containerdiv");
				var lastHeight = $(document).height();
				framework.removeAttribute("width");

				setInterval(function(){
					var lastHeight = $("body").height();
					framework.style.height = lastHeight+"px";
					frameworkParent.style.height = lastHeight+60+"px";

					var newWidth = frameworkParent.offsetWidth;
					framework.style.width = newWidth-60+"px";
				},100);
				
			}
			
		}
		forceResponsive();
	});

/* Accordion Code Fix? */
  var framework = $(window.parent.document.getElementById("cleanSlate"));
  var lastHeight = $(document).height();
  if(framework.length){
    $(framework[0].contentDocument.body).css("overflow","hidden");
  }
  function resetHeight(){
    if(framework.length){
      framework.height($(document).height());
    }
  }
  setInterval(function(){
    if(framework.length){
      if ( lastHeight != $(document).height())
        framework.height($(document).height());
      lastHeight = $(document).height();
    }
  },100);
