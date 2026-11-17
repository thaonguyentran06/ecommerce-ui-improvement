$(function () {
    // Select textarea and change its value
    var msg = $('#msgArea');
    msg.val("here is some new text");

    // Change the page title
    $('#pageTitle').html("new Title");

    // Read the class attribute
    $('#msgArea').val(
        "My class is " + $('#msgArea').attr("class")
    );

    // Change button colors
    var buttons = $('button');
    buttons.css('background-color', 'red');

    // Change body background color
    var temp = $('body');
    temp.css('background-color', 'ivory');

    // Add selected class to icon elements
    $('.center-icons').addClass('selected');
});
