$("#button").append("<div id='brush'><img src='img/button/brush.png'></div>");
$("#button").append("<div id='line'><img src='img/button/line.png'></div>");
$("#button").append("<div id='rect'><img src='img/button/rect.png'></div>");
$("#button").append("<div id='circle'><img src='img/button/circle.png'></div>");
$("#button").append("<div id='eraser'><img src='img/button/eraser.png'></div>");
$("#button").append("<button id='clear'>Clear</button>");
$("#sketch").append("<canvas id='paint' width='600' height='800'></canvas>");
$("#button").append("<input type='range' id='range' min='1' max='100' value='1'>");
$("#button").append("<input type='file' id='file'/>");
var isIE = false || !!document.documentMode;
if (isIE === true) {
 $("<p class='test'>").html("Merci d'utilisé les codes couleurs HTML. Vous pouvez retrouver la liste ici : <button onclick='arraycolor()'>ici</button").appendTo("body");
 $("<input type='text' placeholder='exemple : #ff0000' id='panelcolorie'>").html("").appendTo('body');
}
else{
 $("#button").append("<input type='color' id='panelcolor'>");
}
