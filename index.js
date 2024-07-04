document.addEventListener('DOMContentLoaded', () => {

    
    let ball = document.getElementById('ball'); // targetting the ball element
    let table = document.getElementById('ping-pong-table')
    let paddle = document.getElementById('paddle');

    const scoreBoard = document.createElement('div');
    scoreBoard.id = 'score-board';
    document.body.insertBefore(scoreBoard,table)
    
    let score = 0;

    function gameScore() {
        let gameScore = document.getElementById('score-board');
        
        gameScore.textContent = `Score: ${score}`;
    }


    // here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
    let ballX = 50; // distance of the top of the ball w.r.t ping pong table
    let ballY = 50; // distance of the left of the ball w.r.t ping pong table

    let dx = 2; // diplacement factor in x-direction
    let dy = 2; // diplacement factor in y-direction

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown','yellow', 'brown', 'grey'];

    setInterval(() => {
        ballX += dx;
        ballY += dy;
        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`;

        //  Collision Logic

        if(ballX < paddle.offsetLeft + paddle.offsetWidth &&
            ballY >= paddle.offsetTop &&
            ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight 
        ) {
            dx *= -1;
            score += 10;
            paddle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        }

        // Change in ball direction

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
        gameScore();
    }, 10);

    


    let paddleY = 0;
    let dpY = 10;    // displacement for paddle in y-direction

    document.addEventListener('keydown',(event) => {
        event.preventDefault()
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