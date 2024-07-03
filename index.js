document.addEventListener('DOMContentLoaded', () => {

    let ball = document.getElementById('ball'); // targetting the ball element
    let table = document.getElementById('ping-pong-table')
    let paddle = document.getElementById('paddle');

    // here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
    let ballX = 50; // distance of the top of the ball w.r.t ping pong table
    let ballY = 50; // distance of the left of the ball w.r.t ping pong table

    let dx = 2; // diplacement factor in x-direction
    let dy = 2; // diplacement factor in y-direction

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    setInterval(() => {
        ballX += dx;
        ballY += dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
    }, 10);


    let paddleY = 0;
    let dpY = 10;    // displacement for paddle in y-direction

    document.addEventListener('keydown',(event) => {
        if(event.keyCode == 38 && paddleY > 0) {
            // up arrow
            paddleY -= dpY;
        } else if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight) {
            // down arrow
            paddleY += dpY
        }
        paddle.style.top = `${paddleY}px`
    })


})