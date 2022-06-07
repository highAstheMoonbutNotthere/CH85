
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");




carX = 10
carY = 10
carW = 80
carH = 100

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	imgTag = new Image();
	imgTag.onload = uploadBackground;
	imgTag.src = background_image;
	carTag = new Image();
	carTag.onload = uploadgreencar;
	carTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	ctx.drawImage(carTag, carX, carY, carW, carH)

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (carY >= 0) {
		carY -= 10
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (carY <= 500) {
		carY += 10
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (carX >= 0) {
		carX -= 10
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if (carX <= 700) {
		carX += 10
		uploadBackground();
		uploadgreencar();
	}
}
