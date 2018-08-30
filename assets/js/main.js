$(document).ready(function () {

    var $sidebar = $("#sidebar"),
        $sidebarButton = $('#sidebarCollapse'),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 15;

    $window.scroll(function () {
        if ($window.scrollTop() > offset.top) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
            $sidebarButton.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
            $sidebarButton.stop().animate({
                marginTop: 0
            });
        }
    });



    //Sidebar collapse.
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.smooth').on('click', function () {
        $.smoothScroll({
            scrollElement: $('body'),
            scrollTarget: '#' + this.id
        });

        return false;
    });



});
