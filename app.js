// Game canvas and context setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Constants
const LIGHT_SPEED = 300000; // Speed of light in km/s (simplified)
let shipSpeed = 0; // Current speed of the spaceship
const acceleration = 5000; // Speed increment per keypress
let timeFactor = 1; // Time dilation factor

// Spaceship object
const spaceship = {
  x: 100,
  y: canvas.height / 2,
  width: 40,
  height: 20,
  color: "white",
};

// Obstacles array
let obstacles = [];

// Function to calculate time dilation
function calculateTimeDilation(speed) {
  return Math.sqrt(1 - speed ** 2 / LIGHT_SPEED ** 2);
}

// Draw spaceship
function drawSpaceship() {
  ctx.fillStyle = spaceship.color;
  ctx.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

// Create and draw obstacles
function createObstacle() {
  let size = Math.random() * 50 + 20;
  let obstacle = {
    x: canvas.width,
    y: Math.random() * canvas.height,
    width: size,
    height: size,
    color: "red",
    speed: 2 + Math.random() * 2,
  };
  obstacles.push(obstacle);
}

function drawObstacles() {
  obstacles.forEach((obstacle) => {
    ctx.fillStyle = obstacle.color;
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

// Update obstacle positions based on speed of light effect
function updateObstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.x -= obstacle.speed * timeFactor; // Objects move faster relative to player
  });
  obstacles = obstacles.filter((obstacle) => obstacle.x > -obstacle.width); // Remove off-screen
}

// Keyboard controls for the spaceship
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    shipSpeed += acceleration;
    if (shipSpeed > LIGHT_SPEED) shipSpeed = LIGHT_SPEED;
    timeFactor = calculateTimeDilation(shipSpeed);
  }
  if (e.code === "ArrowDown") {
    shipSpeed -= acceleration;
    if (shipSpeed < 0) shipSpeed = 0;
    timeFactor = calculateTimeDilation(shipSpeed);
  }
});

// Main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw and update elements
  drawSpaceship();
  drawObstacles();
  updateObstacles();

  // Randomly create obstacles
  if (Math.random() < 0.02) {
    createObstacle();
  }

  // Redraw every frame
  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
