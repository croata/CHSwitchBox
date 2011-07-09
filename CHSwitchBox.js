/*CHSwitchBox.js
Description: An extremely simple but attractive toggle switch you can use in place of a standard input checkbox.
Author: Collin Henderson
Website: http://syropia.net
Contact: collin@syropia.net
Version: 1.3
*/
 (function($) {

    //Attach this new method to jQuery
    $.fn.extend({


        CHSwitchBox: function(options) {
	
			//Set up defaults
			var defaults = { 
				onLabel:      'On', 
				offLabel:     'Off' 
			};
			var options = $.extend({}, defaults, options)
            //Iterate over the current set of matched elements
            return this.each(function() {
                var $markup = $('<div class="switch"><span class="green">'+options.onLabel+'</span><span class="red">'+options.offLabel+'</span><div class="thumb"></div></div>');
                $markup.insertAfter($(this));
                $(this).hide();

                $('div.switch').toggle(function()
                {
                    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)))
                    {
                        $(this).children('div.thumb').css({
                            '-webkit-transition-duration': '300ms',
                            '-webkit-transform': 'translate3d(53px,0,0)'
                        });
                    }
                    else
                    {
                        $(this).children('div.thumb').animate({
                            left: 26
                        },
                        300);
                    }
                    $(this).prev('input').attr('checked', true);

                },
                function()
                {
                    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)))
                    {
                        $(this).children('div.thumb').css({
                            '-webkit-transition-duration': '300ms',
                            '-webkit-transform': 'translate3d(0,0,0)'
                        });
                    }
                    else
                    {
                        $(this).children('div.thumb').animate({
                            left: -27
                        },
                        300);
                    }
                    $(this).prev('input').attr('checked', false);
                });

            });

        }
    });
})(jQuery);