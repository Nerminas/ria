function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'src/assets/currencies.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but
            // simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function init() {
    loadJSON(function (response) {
        console.log("Test");
        // Parse JSON string into object let jsonData = JSON.parse(response);

        console.log("Test");
        const jsonData = $.parseJSON(response);

        console.log(jsonData);

        let $select = $('#currencies');
        $.each(jsonData, function (index, o) {
            console.log(o);
            var $option = $("<option/>")
                .attr('value', o.code)
                .text(o.name);
            $select.append($option);
        })
    });
}

init();