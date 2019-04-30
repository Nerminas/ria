class Currency{
    constructor(code, name, symbol){
        this.code = code;
        this.name = name;
        this.symbol = symbol;
    }
}

Currency.prototype.getCode = function (){
    return this.code;
}

Currency.prototype.getName = function (){
    return this.name;
}

Currency.prototype.getSymbol = function (){
    return this.symbol;
}

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'src/assets/currencies.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
function init() {
    loadJSON(function (response) {
        const jsonData = $.parseJSON(response);
        let $select = $('#currencies');
        $.each(jsonData, function (index, o) {
            console.log(o);
            let curr = new Currency(o.code, o.name, o.symbol);
            var $option = $("<option/>")
                .attr('value', curr.getCode())
                .text(curr.getSymbol() + " | " + curr.getName());
            $select.append($option);
        })
    });
}

init();