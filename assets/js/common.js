// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    // Abstract: click to open, X button or outside click to close
    $('a.abstract').click(function(e) {
        e.stopPropagation();
        var $tooltip = $(this).siblings('.abstract-tooltip');
        var isOpen = $tooltip.hasClass('open');
        // close all other open tooltips
        $('.abstract-tooltip.open').removeClass('open');
        if (!isOpen) {
            $tooltip.addClass('open');
        }
    });

    $('.abstract-close').click(function(e) {
        e.stopPropagation();
        $(this).closest('.abstract-tooltip').removeClass('open');
    });

    $(document).click(function() {
        $('.abstract-tooltip.open').removeClass('open');
    });

    $('.abstract-tooltip').click(function(e) {
        e.stopPropagation();
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

