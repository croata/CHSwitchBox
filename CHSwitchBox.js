/*CHSwitchBox.js
Description: An extremely simple but attractive toggle switch you can use in place of a standard input checkbox.
Author: Collin Henderson
Website: http://syropia.net
Contact: collin@syropia.net
Version: 1.1
*/
 (function($) {

    //Attach this new method to jQuery
    $.fn.extend({


        CHSwitchBox: function() {

            //Iterate over the current set of matched elements
            return this.each(function() {
                var $markup = $('<div class="switch"><span class="green">On</span><span class="red">Off</span><div class="thumb"></div></div>');
                $markup.insertAfter($(this));
                $(this).hide();
                $('div.switch').toggle(function()
                {
                    $(this).children('div.thumb').animate({
                        left: 26
                    },
                    300);
                    $(this).prev('input').attr('checked', true);

                },
                function()
                {
                    $(this).children('div.thumb').animate({
                        left: -27
                    },
                    300);
                    $(this).prev('input').attr('checked', false);
                });
            });

        }
     });
})(jQuery);