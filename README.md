# relativity
Creating a simple JavaScript game about relativity. 

Relativity Runner

In this game, the player controls a spaceship that moves through space. As the spaceship gets closer to the speed of light, time slows down for the player (as it would due to time dilation). The goal is to avoid obstacles, which appear to move faster as the player approaches the speed of light.

Explanation:

- Spaceship: The player controls a spaceship that can accelerate using the up arrow key and decelerate using the down arrow.
- Obstacles: Obstacles spawn randomly and move towards the spaceship. As the spaceship approaches light speed, the timeFactor (which simulates time dilation) slows down time for the spaceship, making obstacles seem to move faster.
- Relativity Effect: As the ship approaches the speed of light, the function calculateTimeDilation adjusts how fast time passes relative to the obstacles.

Things you can add:

- Collision Detection: You can add a function to detect if the spaceship crashes into an obstacle.
- Score System: Track how long the player survives while avoiding obstacles.
- Visual Effects: Add a "warping" visual as the spaceship gets close to the speed of light to give players a sense of increased velocity.
