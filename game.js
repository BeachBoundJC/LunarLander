const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

var spaceship = {
  color: "black",
  width: 8,
  height: 22,
  position:
    {
      x: 0,
      y: 0,
    },
  angle: 0,
  engineOn: false,
  rotatingLeft: false,
  rotatingRight: false
}

function drawSpaceship() {
  context.save();
  context.translate(spaceship.position.x, spaceship.position.y);
  context.rotate(spaceship.angle);
  context.rect(
    spaceship.width * -0.5,
    spaceship.height * -0.5,
    spaceship.widht,
    spaceship.height);
  context.fillStyle = spaceship.color;
  context.fill();
  context.restore();
}

drawSpaceship();
