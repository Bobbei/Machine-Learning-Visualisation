var nodes_slide = document.getElementById('nodes')
var nodes = +nodes_slide.value;

var center_slide = document.getElementById('center')
var center = +center_slide.value;

var factor_slide = document.getElementById('factor')
var factor = +factor_slide.value;

var balance_slide = document.getElementById('balance')
var balance = +balance_slide.value;
function draw(l) {
    alert(l);
    document.querySelectorAll('.'+l).forEach(e => e.remove());
    for (let i = 1; i <= nodes; i++) {
        let div = document.createElement("div");
        div.classList.add(l);
        let division = 1/nodes;
        let distance = ((division * factor * 1)-(division * factor * 2))/2;
        let top = center + (division * factor * i) + distance - factor/2;
        div.style.top = top + "px";
        div.style.left = "0px";
        div.innerHTML = i;
        document.getElementById("canvas").appendChild(div);
}}
draw("input");

nodes_slide.oninput = function() {
    nodes = +this.value;
    draw("input");
}
center_slide.oninput = function() {
    center = +this.value;
    draw("input");
}
factor_slide.oninput = function() {
    factor = +this.value;
    draw("input");
}
balance_slide.oninput = function() {
    balance = +this.value;
    draw("input");
}

alert(" aa")