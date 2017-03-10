//build canvas
var canvas = document.getElementById('main');
var context = canvas.getContext('2d');

//properties paddle
var paddle = {
	height: 20,
	width: 150,
	color: '#3B4F00'
}

//build paddle
function buildPaddle() {
	context.beginPath();
	context.rect((canvas.width - paddle.width) / 2, canvas.height - paddle.height, paddle.width, paddle.height);
	context.fillStyle = paddle.color;
	context.fill();
	context.closePath();
}

//properties wall
var wall = {
	rowTotal: 3,
	columnTotal: 8,
	width: 75,
	height: 20,
	spacing: 15,
	marginTop: 30,
	marginLeft: 50,
	color: 'green'
}

//build wall
function buildWall() {
	var walls = [];
	for (column = 0; column < wall.columnTotal; column++) {
		walls[column] = [];
		for(row = 0; row < wall.rowTotal; row++) {

			//spacing wall
			walls[column][row] = { x: 0, y: 0 }
			var wallX = (column * (wall.width + wall.spacing)) + wall.marginLeft;
			var wallY = (row * (wall.height + wall.spacing)) + wall.marginTop;
			walls[column][row].x = wallX;
			walls[column][row].y = wallY;

			//draw
			context.beginPath();
			context.rect(wallX, wallY, wall.width, wall.height);
			context.fillStyle = wall.color;
			context.fill();
			context.closePath();

			//log coordinates in console
			console.log(wallX + ', ' + wallY);
		}
	}
}

//properties ball
var ballColor = '#00e73a';

//build ball
function buildBall(){
	context.beginPath();
	context.arc(200, 150, 12, 0, Math.PI * 2);
	context.fillStyle = ballColor;
	context.fill();
	context.closePath();
}

//build elements
buildPaddle();
buildBall();
buildWall();

//movements

//collission
