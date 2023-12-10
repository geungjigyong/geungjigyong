(function($){
    $(document).ready(function(){
    	$("#js-gnb").on("mouseenter focusin",function(){
    		$("#js-depth > li > a").css("color","#6b6b6b");
    		$("#js-gnb-bg").stop().animate({"height":"300px"},500);
			$("#js-depth").stop().animate({"height":"380px"},500);
			$("#js-depth > li").on("mouseenter focusin", function(){
				$("#js-depth li").not(this).removeClass("on");
				$(this).addClass("on");
				$(this).siblings().children(".js-depthBox ").css("background-color","#ffffff");
				$("#js-depth li.on").children(".js-depthBox ").css("background-color","#f5f5f5");
			});
	    });
    	$("#js-gnb").on("mouseleave blur",function(){
    		$("#js-depth").stop().animate({"height":"52px"},500);
			$("#js-depth li").removeClass("on");
			$("#js-gnb-bg").stop().animate({"height":"0"},600);
			$(".js-depthBox ").css("background-color","#ffffff");
	    });
    	$("#js-gnb").on("focusin",function(){
    		$("#js-gnb-bg").stop().animate({"height":"300px"},500);
			$("#js-depth").stop().animate({"height":"380px"},500);
			$("#js-depth > li").on("mouseenter focusin", function(){
				$("#js-depth li").not(this).removeClass("on");
				$(this).addClass("on");
				$(this).siblings().children(".js-depthBox ").css("background-color","#ffffff");
				$("#js-depth li.on").children(".js-depthBox ").css("background-color","#f5f5f5");
			});
	    });
    	$('*:not("#js-gnb *")').focus(function(){
    		$("#js-depth").stop().animate({"height":"52px"},500);
			$("#js-depth li").removeClass("on");
			$("#js-gnb-bg").stop().animate({"height":"0"},600);
			$(".js-depthBox ").css("background","#ffffff");
        });
    	// $(".js-depthBox  > li").hover(function(){
    	// 	$(this).children().css("color","#ffffff");
    	// },
		// function(){
		// 	$(this).children().css("color","#484848");
		// });
    });
})(jQuery);

//fake select
jQuery(function($){
    // Common
    var select_root = $('div.fake_select');
    var select_value = $('.my_value');
    var select_a = $('div.fake_select>ul>li>a');
    var select_input = $('div.fake_select>ul>li>input[type=radio]');
    var select_label = $('div.fake_select>ul>li>label');
    // Radio Default Value
    $('div.my_value').each(function(){
        var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
        $(this).append(default_value); });

    // Line
    select_value.bind('focusin',function(){$(this).addClass('outLine');});
    select_value.bind('focusout',function(){$(this).removeClass('outLine');});
    select_input.bind('focusin',function(){$(this).parents('div.fake_select').children('div.my_value').addClass('outLine');});
    select_input.bind('focusout',function(){$(this).parents('div.fake_select').children('div.my_value').removeClass('outLine');});
    // Show
    function show_option(){
        $(this).parents('div.fake_select:first').toggleClass('open');
    }
    // Hover
    function i_hover(){
        $(this).parents('ul:first').children('li').removeClass('hover');
        $(this).parents('li:first').toggleClass('hover');
    }
    // Hide
    function hide_option(){
        var t = $(this);
        setTimeout(function(){
            t.parents('div.fake_select:first').removeClass('open');
        }, 1);
    }
    // Set Input
    function set_label(){
        var v = $(this).next('label').text();
        $(this).parents('ul:first').prev('.my_value').text('').append(v);
        $(this).parents('ul:first').prev('.my_value').addClass('selected');
    }
    // Set Anchor
    function set_anchor(){
        var v = $(this).text();
        $(this).parents('ul:first').prev('.my_value').text('').append(v);
        $(this).parents('ul:first').prev('.my_value').addClass('selected');
    }
    // Anchor Focus Out
    $('*:not("div.fake_select a")').focus(function(){
        $('.a_list').parent('.fake_select').removeClass('open');
    });
    select_value.click(show_option);
    select_root.removeClass('open');
    select_root.mouseleave(function(){$(this).removeClass('open');});
    select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
    select_input.change(set_label).focus(set_label);
    select_label.hover(i_hover).click(hide_option);
});

$(document).ready(function(){
	//search
	$("#detailSearch").hide();
      //$(".search_block").show();
      if($('#detailSearch').hasClass("search_blcok")){
        $("#detailSearch").show();
         $(".btn_detail i").removeClass("fa-caret-down").addClass("fa-caret-up");
      }else{
        $("#detailSearch").hide();
          $(".btn_detail i").removeClass("fa-caret-up").addClass("fa-caret-down");
      }
      $(".btn_detail").click(function(){
          if($('#detailSearch').is(":hidden")){
               $("#detailSearch").slideDown("4000");
               $(".btn_detail i").removeClass("fa-caret-down").addClass("fa-caret-up");
          }else{
              $("#detailSearch").slideUp("4000");
                $(".btn_detail i").removeClass("fa-caret-up").addClass("fa-caret-down");
          }
      });

	var selectTarget = $('.custom_select select');
    selectTarget.on('blur', function(){
        $(this).parent().removeClass('focus');
    });
    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });

	//tab
	$(".tab_content").hide();
    $(".tab_content:first").show();
	$("#tab a").click(function(event) {
		event.preventDefault(); //
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab_content").not(tab).hide();
		$(tab).fadeIn();
	});

	$(".tab_content2").hide();
    $(".tab_content2:first").show();
	$("#tab2 a").click(function(event) {
		event.preventDefault(); //
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab_content2").not(tab).hide();
		$(tab).fadeIn();
	});

});

//popup
function view_show(num) {
	var left = ( $(window).scrollLeft() + ( $(window).width() - $('.popup').width()) / 2 );
	var top = ( $(window).scrollTop() + ( $(window).height() - $('.popup').height()) / 2 );
	$('.popup').css({'left':left,'top':top, 'position':'absolute'});
	document.getElementById("dispay_view"+num).style.display = "block";
	//document.getElementById("layer_bg").style.display = "block";
 }
 function view_hide(num) {
    document.getElementById("dispay_view"+num).style.display = "none";
    //document.getElementById("layer_bg").style.display = "none";
 }
