
$(function () {
    $("figure img").on("mouseover", function (e) {
        var alt = $(this).attr("alt");
        var src = $(this).attr("src");
        var newsrc = src.replace("small", "medium");

        $("#preview").remove();

        var preview = $('<div id="preview"></div>');
        var image = $('<img>').attr("src", newsrc);
        var caption = $("<p></p>").text(alt);

        preview.append(image);
        preview.append(caption);

        preview.css({
            position: "absolute",
            top: (e.pageY - 10) + "px",
            left: (e.pageX + 30) + "px",
            display: "none",
            zIndex: 1000
        });

        $("body").append(preview);

        $(this).addClass("gray");
        $("#preview").fadeIn(1000);
    });

    $("figure img").on("mouseleave", function () {
        $(this).removeClass("gray");
        $("#preview").remove();
    });

    $("figure img").on("mousemove", function (e) {
        $("#preview").css({
            top: (e.pageY - 10) + "px",
            left: (e.pageX + 30) + "px"
        });
    });
});
