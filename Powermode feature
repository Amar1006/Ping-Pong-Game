# Adding feature of power mode 

document.addEventListener('DOMContentLoaded', () => {

    let ball = document.getElementById('ball');
    let table = document.getElementById('ping-pong-table');
    let paddle = document.getElementById('paddle');

    const scoreBoard = document.createElement('div');
    scoreBoard.id = 'score-board';
    document.body.insertBefore(scoreBoard, table);

    let score = 0;

    function gameScore() {
        let gameScore = document.getElementById('score-board');
        gameScore.textContent = `Score: ${score}`;
    }

    let ballX = 50;
    let ballY = 50;

    let dx = 2;
    let dy = 2;

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    const colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown', 'yellow', 'brown', 'grey'];

    // Power Mode variables
    let powerMode = false;
    let powerTimeout;

    setInterval(() => {
        let currentDx = powerMode ? dx * 2 : dx;
        let currentDy = powerMode ? dy * 2 : dy;

        ballX += currentDx;
        ballY += currentDy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        // Paddle Collision
        if (currentDx < 0 &&
            ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY >= paddle.offsetTop &&
            ballY <= paddle.offsetTop + paddle.offsetHeight) {

            dx *= -1;
            score += powerMode ? 30 : 10;
            paddle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }

        // Ball direction change
        if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
        if (ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;

        gameScore();
    }, 10);

    let paddleY = 0;
    let dpY = 10;

    document.addEventListener('keydown', (event) => {
        event.preventDefault();

        if (event.keyCode === 38 && paddleY > 0) {
            paddleY -= dpY;
        } else if (event.keyCode === 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            paddleY += dpY;
        }

        // Activate Power Mode on Spacebar
        if (event.code === 'Space' && !powerMode) {
            powerMode = true;
            paddle.style.boxShadow = '0 0 20px 5px gold';

            powerTimeout = setTimeout(() => {
                powerMode = false;
                paddle.style.boxShadow = 'none';
            }, 5000);
        }

        paddle.style.top = `${paddleY}px`;
    });

    document.addEventListener('mousemove', (event) => {
        let mouseDistanceFromTop = event.clientY;
        let distanceOfTableFromTop = table.offsetTop;
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight / 2;
        paddleY = mousePointControl;

        if (paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return;
        paddle.style.top = `${paddleY}px`;
    });
});
