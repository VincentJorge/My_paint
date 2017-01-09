var canvas = document.getElementById('paint');
var imageLoader = document.getElementById('file');
var ctx = canvas.getContext('2d');
var clic = 0;
var clik = 0;
$("#brush").click(function () {
	(function() {
		var sketch = document.querySelector('#sketch');
		var sketch_style = getComputedStyle(sketch);
		var mouse = {x: 0, y: 0};
 	//on recupere les mouvements de la souris sur la canvas
 	canvas.addEventListener('mousemove', function(e) {
 		mouse.x = e.pageX - this.offsetLeft;
 		mouse.y = e.pageY - this.offsetTop;
 	}, false);
 	$("#paint").css("cursor", "url(img/cursor/brush_cursor.cur), auto");
 	canvas.addEventListener('mousedown', function(e) {
 		ctx.beginPath();
 		ctx.lineWidth = $("input[type=range]").val();
 		var isIE = false || !!document.documentMode;
 		if (isIE != false) {
 			ctx.strokeStyle = $("#panelcolorie").val();
 		}
 		else {
 			ctx.strokeStyle = $("#panelcolor").val() || $('#color').val();
 		}
 		ctx.moveTo(mouse.x, mouse.y);
 		canvas.addEventListener('mousemove', onPaint, false);
 	}, false);
 	canvas.addEventListener('mouseup', function() {
 		canvas.removeEventListener('mousemove', onPaint, false);
 	}, false);
 	var onPaint = function() {
 		ctx.lineTo(mouse.x, mouse.y);
 		ctx.stroke();
 	};
 }());
});
function eraseFunction(e) {
	var y 
}
function lineFunction(e) {
	$("#paint").css("cursor", "url(img/cursor/line_cursor.cur), auto");
	var y = e.pageY - this.offsetTop, x = e.pageX - this.offsetLeft;
	if (clic === 0) {
		clic = 1;
		ctx.beginPath();
		if (isIE != false) {
			ctx.strokeStyle = $("#panelcolorie").val();
		}
		else {
			ctx.strokeStyle = $("#panelcolor").val() || $('#color').val();
		}
		ctx.lineWidth = $("input[type=range]").val();
		ctx.moveTo(x, y);
	} else {
		clic = 0;
		ctx.lineTo(x, y);
		ctx.stroke();
		ctx.strokeStyle = 'red';
		ctx.closePath();
	}
}
function line(e) {
	remove_event();
	canvas.addEventListener("click", lineFunction);
	e.preventDefault();
}
document.getElementById("line").addEventListener('click', line);
function rectangleFunction(e) {
	$("#paint").css("cursor", "url(img/cursor/rect_cursor.cur), auto");
	if (clik === 0) {
		clik = 1;
		x1 = e.pageX - this.offsetLeft;
		y1   = e.pageY - this.offsetTop;

	} else {
		clik = 0;
		var width = e.pageX - this.offsetLeft - x1, height = e.pageY - this.offsetTop - y1;
		ctx.beginPath();
		ctx.fillStyle = $("#panelcolor").val();
               ctx.fill();
		ctx.lineWidth = $("input[type=range]").val();
		if (isIE != false) {
			ctx.strokeStyle = $("#panelcolorie").val();
		}
		else {
			ctx.strokeStyle = $("#panelcolor").val() || $('#color').val();
		}
		ctx.rect(x1, y1, width, height);
		ctx.stroke();
		ctx.closePath();
	}
}
function rectangle() {
	remove_event();
	canvas.addEventListener("click", rectangleFunction);
}
document.getElementById('rect').addEventListener('click', rectangle);
function cercleFunction(e) {
	$("#paint").css("cursor", "url(img/cursor/circle_cursor.cur), auto");
	if (clic === 0) {
                //premier clic
                clic = 1;
                x1 = e.pageX - this.offsetLeft;
                y1 = e.pageY - this.offsetTop;

            } else {
            //deuxieme clic
            clic = 0;
            var width = e.pageX - this.offsetLeft - x1, height = e.pageY - this.offsetTop - y1, total = Math.sqrt((width * width) + (height * height));
            ctx.beginPath();
            if (isIE != false) {
            	ctx.strokeStyle = $("#panelcolorie").val();
            }
            else {
            	ctx.strokeStyle = $("#panelcolor").val() || $('#color').val();
            }
            ctx.arc(x1, y1, total, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }
    }
    function cercle(e) {
    	remove_event();
    	canvas.addEventListener("click", cercleFunction);
    	e.preventDefault();
    }
    document.getElementById("circle").addEventListener('click', cercle);
//bouton pour clear le dessin en activité
$('#clear').click(function() {
	var canvas = document.querySelector('#paint');
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});
remove_event = function () {
	canvas.removeEventListener('click', lineFunction);
	canvas.removeEventListener('click', rectangleFunction);
	canvas.removeEventListener('click', cercleFunction);
};
var link = document.createElement('a');
link.innerHTML = 'téléchargé';
link.addEventListener('click', function(ev) {
	var namefile = prompt('Quel est le nom du fichier ?\n Si vide nom par défault = image')
	if (namefile === '' || namefile === null) {
		namefile = 'image'
	}
	var formatfile = prompt('Quel est le format de limage ?\nDeux choix : jpg ou png.\nSi une autre valeur est saisie le format par défault est png');
	if (formatfile === 'jpg' || formatfile === 'png') {
		console.log(formatfile)
		link.href = canvas.toDataURL('image/'+formatfile);
		link.download = namefile+formatfile;			
	}
	else{
		link.href = canvas.toDataURL('image/jpg');
		link.download = namefile+formatfile;	
	}
}, false);
document.body.appendChild(link);
imageLoader.addEventListener('change', uploadimage, false);
function uploadimage(e){
	var reader = new FileReader();
	reader.onload = function(event){
		var img = new Image();
		var dHeight = canvas.height;
		img.onload = function(){
			img.width = canvas.width;
			img.height= canvas.height;
			ctx.drawImage(img,0,0, img.width, dHeight );
		};
		img.src = event.target.result;
	};
	reader.readAsDataURL(e.target.files[0]);
}