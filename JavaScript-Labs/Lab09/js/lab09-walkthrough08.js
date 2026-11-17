
function init() {
    var form = document.getElementById("sampleForm")
        || document.querySelector('form[name="sampleForm"]');

    // Cho JavaScript tự kiểm tra dữ liệu
    form.noValidate = true;

    form.addEventListener("submit", checkForEmptyFields);
}

window.addEventListener("load", init);

function checkForEmptyFields(e) {
    var errorArea = document.getElementById("errors");

    errorArea.className = "hidden";

    var cssSelector = "input[type=text],input[type=password]";
    var fields = document.querySelectorAll(cssSelector);

    var fieldList = [];

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == null ||
            fields[i].value.trim() == "") {

            e.preventDefault();
            fieldList.push(fields[i]);
        }
    }

    var msg = "The following fields can't be empty: ";

    if (fieldList.length > 0) {
        for (var i = 0; i < fieldList.length; i++) {
            msg += fieldList[i].id + ",";
        }

        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
}
