$(function () {
    $("#consume").click(function () {
        var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $("#results").html("<p>Loading cities...</p>");

        $.get(url, function (data, status) {
            if (status == "success") {
                $("#results").html("<ul></ul>");

                $.each(data, function (index, value) {
                    var li = $("<li></li>").text(value.name);
                    li.appendTo("#results ul");
                });
            }
        }).fail(function (xhr, status, error) {
            $("#results").text(
                "Request failed: " + status + " - " + error
            );
        });
    });
});
