//Criar uma referência para tela
canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
//Dê altura e largura específicas para a imagem do carro
greencar_width  = 75;
greencar_height = 100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
greencar_x = 5;
greencar_y = 225;
function add() {
	//carregar carro e imagens de fundo na tela.
	function add() {
  background_imgTag = new Image ();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  greencar_imgTag = new Image ();
  greencar_imgTag.onload = uploadBackground;
  greencar_imgTag.src = background_image;
	}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.heigth)

	//Defina a função ‘uploadBackground’

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x_greencar_y , greencar_width , greencarheight)

	//Defina a função ‘uploadGreenCar’.

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	greencar_y = greencar_y - 10;
    console.log("when up arrow is pressed , x = " + greencar_x + "! y =" +greencar_y)''
	uploadBackground();
	uploadGreenCar();
	//Definir função para mover o carro para cima
}

function down()
{if(greencar_y >=0)
	greencar_y = greencar_y - 10;
    console.log("when up arrow is pressed , x = " + greencar_x + "! y =" +greencar_y)''
	uploadBackground();
	uploadGreenCar();
	//Definir função para mover o carro para baixo
}

function left()
{if(greencar_y >=0)
	greencar_y = greencar_y - 10;
    console.log("when up arrow is pressed , x = " + greencar_x + "! y =" +greencar_y)''
	uploadBackground();
	uploadGreenCar();
	//Definir função para mover o carro para o lado esquerdo
}

function right()
{if(greencar_y >=0)
	greencar_y = greencar_y - 10;
    console.log("when up arrow is pressed , x = " + greencar_x + "! y =" +greencar_y)''
	uploadBackground();
	uploadGreenCar();
	
}
