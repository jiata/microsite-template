(function () {
		
	/* ========================
	 * Navigation
	 * ======================== */
	 
	$( ".az-nav-link" ).each( function() {
		var id = $(this).attr( "data-id" );
		$(this).click( function() {
			$( window ).scrollTop( $("#"+id).offset().top - 60 );
		});
	});
	 
	/* ========================
	 * Case Study Manager
	 * ======================== */
	 
	var caseStudyPointer = 0;
	var caseStudiesPwd = [
		"../casestudies/casestudy01.html",
		"../casestudies/casestudy02.html"
	];
	
	function changeCaseStudy(i) {
		caseStudyPointer = i;
		$("#az-case-study").load(caseStudiesPwd[i]);
	}
	changeCaseStudy(0);
	
	function setSelector(el) {
		$(".az-case-study-selector").each( function() {
			$(this).removeClass("active");
		});
		el.addClass("active");
	}

	var caseStudyNavWrapper = $("#az-case-study-navigation");
	$.each( caseStudiesPwd, function( i, p ) {
		var selector = $("<div class='az-case-study-selector'></div>");
		if (i == caseStudyPointer) {
			selector.addClass("active");
		}
		
		selector.click(function () {
			changeCaseStudy(i);
			setSelector($(this));
		});
		
		caseStudyNavWrapper.append(selector);
	});
	
	/* ========================
	 * Tracking
	 * ======================== */
	 
	$( "[data-track='true']").each( function() {
		var name = $(this).attr('id');
		$(this).click( function() {
			appInsights.trackEvent(name);
		});
	});
	
})();