// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    // Abstract: click to open, X button to close
    $('a.abstract').click(function(e) {
        e.stopPropagation();
        var $tooltip = $(this).siblings('.abstract-tooltip');
        var $li = $(this).closest('li');
        var isOpen = $tooltip.hasClass('open');
        $('.abstract-tooltip.open').removeClass('open');
        $('li').removeClass('abstract-active');
        if (!isOpen) {
            $tooltip.addClass('open');
            $li.addClass('abstract-active');
        }
    });

    $('.abstract-close').click(function(e) {
        e.stopPropagation();
        $(this).closest('.abstract-tooltip').removeClass('open');
        $(this).closest('li').removeClass('abstract-active');
    });

    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});

