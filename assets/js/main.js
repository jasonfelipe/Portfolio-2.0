$(document).ready(function () {

    //Sidebar collapse.
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.smooth').on('click', function() {
        $.smoothScroll({
            scrollElement: $('body'),
            scrollTarget: '#' + this.id
        });
        
        return false;
    });



});
