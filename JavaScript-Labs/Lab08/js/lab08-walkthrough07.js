
var daysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri"];

daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border='1' cellpadding='12'>");
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    var day = daysOfWeek[i];

    if (day.length > 3) {
        day = "<em>" + day + "</em>";
    }

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

var date = 1;

for (var row = 0; row < 5; row++) {
    document.write("<tr>");

    for (var col = 0; col < 7; col++) {
        if (date <= 30) {
            document.write("<td>" + date + "</td>");
            date++;
        } else {
            document.write("<td></td>");
        }
    }

    document.write("</tr>");
}

document.write("</table>");


