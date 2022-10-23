let paddle_l: game.LedSprite = null
let paddle_r: game.LedSprite = null
let ball: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (paddle_l.get(LedSpriteProperty.X) == 0) {
        paddle_l.move(0)
    } else {
        paddle_l.move(-1)
        paddle_r.move(-1)
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
    ball = game.createSprite(2, 1)
    ball.turn(Direction.Right, 90)
    paddle_l = game.createSprite(1, 4)
    paddle_r = game.createSprite(2, 4)
    while (true) {
        ball.move(1)
        if (ball.get(LedSpriteProperty.Y) == 4) {
            if (ball.get(LedSpriteProperty.X) != paddle_l.get(LedSpriteProperty.X) && ball.get(LedSpriteProperty.X) != paddle_r.get(LedSpriteProperty.X)) {
                game.gameOver()
            } else {
                game.addScore(1)
            }
        }
        basic.pause(1000)
        if (ball.isTouching(paddle_l)) {
            ball.set(LedSpriteProperty.Direction, -45)
        }
        if (ball.isTouching(paddle_r)) {
            ball.set(LedSpriteProperty.Direction, 45)
        }
        ball.ifOnEdgeBounce()
    }
})
input.onButtonPressed(Button.B, function () {
    if (paddle_r.get(LedSpriteProperty.X) == 4) {
        paddle_r.move(0)
    } else {
        paddle_l.move(1)
        paddle_r.move(1)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (ball.get(LedSpriteProperty.Direction) == 90) {
        ball.set(LedSpriteProperty.Direction, 45)
    }
    if (ball.get(LedSpriteProperty.Direction) == -90) {
        ball.set(LedSpriteProperty.Direction, 45)
    }
    if (ball.get(LedSpriteProperty.Y) == 0) {
        game.addScore(100)
    }
})
