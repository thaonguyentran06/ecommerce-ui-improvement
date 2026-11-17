$(function () {
    $(".animLoading").hide();

    $("#consume").click(function () {
        $(".animLoading").show();
        $("#results").html("<ul></ul>");

        var url = "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url)
            .done(function (data) {
                $.each(data, function (index, value) {
                    var li = $("<li></li>").text(value.name);
                    li.appendTo("#results ul");
                });
            })
            .fail(function (xhr, status, error) {
                $("#results").text(
                    "Failed loading data - status=" +
                    status + " error=" + error
                );

                alert(
                    "failed loading data - status=" +
                    status + " error=" + error
                );
            })
            .always(function () {
                $(".animLoading").fadeOut("slow");
            });
    });
});
