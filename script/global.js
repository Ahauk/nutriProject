$(function () {
    $('input[type="submit"]').mousedown(function () {
        $(this).css('background', '#F89406');
    });
    $('input[type="submit"]').mouseup(function () {
        $(this).css('background', '#F5AB35');
    });
    $('#loginform').click(function () {
        $('.login').fadeToggle('slow');
        $(this).toggleClass('green');
    });
    $('#registerform').click(function () {
        $('.register').fadeToggle('slow');
        $(this).toggleClass('green');
    });
    $(document).mouseup(function (e) {
        var container_log = $(".login");
        if (!container_log.is(e.target) // if the target of the click isn't the container...
            && container_log.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container_log.hide();
            $('#loginform').removeClass('green');
        }
        var container = $(".register");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
            $('#registerform').removeClass('green');
        }
    });
    
    setTimeout(function() {
        $("#girl").fadeOut(1600);
    },1500);
    
    setTimeout(function() {
        $("#girl").removeClass("fat").addClass("slim").fadeIn(1500);
    },3000);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});