namespace SpriteKind {
    export const Mitt = SpriteKind.create()
    export const Clock = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Mitt, SpriteKind.Clock, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.magicWand.play()
    sprite.y += -5
    pause(100)
    sprite.y += 5
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Mitt, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.powerUp.play()
    sprite.y += -5
    pause(100)
    sprite.y += 5
})
info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
let specialBall: Sprite = null
let Baseball: Sprite = null
info.startCountdown(20)
scene.setBackgroundColor(13)
let theMitt = sprites.create(img`
    . . . . . . e e e e e e e . . . 
    . . . . e e 6 6 1 6 6 6 e e . . 
    . . . e e e 1 1 e 6 6 e e 6 e . 
    . . . e 6 1 1 6 e 6 6 e 6 6 e . 
    . . . e 6 1 e 6 e 6 6 e 6 e e . 
    . . . e 6 6 e 6 e 6 6 e 6 e e . 
    . . f f f 6 6 6 6 6 6 6 6 6 e . 
    . f f f f 6 6 6 6 6 6 6 6 6 e . 
    . f e e f e 6 6 6 6 6 6 6 e e . 
    . f e e e e e 6 6 6 6 6 6 e . . 
    . . e e e e e e e e e e e e . . 
    . . e e e e e e e e e e e . . . 
    . . e e e e e e e e e e e . . . 
    . . . e e e e e e e e e . . . . 
    . . . e e e e e e e e e . . . . 
    . . . . . e e e e e . . . . . . 
    `, SpriteKind.Mitt)
controller.moveSprite(theMitt)
theMitt.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    Baseball = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 e e 1 1 1 1 e e 1 1 . . 
        . 1 1 1 1 1 e 1 1 e e 1 1 1 1 . 
        . 1 1 1 1 1 e 1 1 e 1 1 1 1 1 . 
        . 1 1 1 1 1 e 1 1 e 1 1 1 1 1 . 
        . 1 1 1 1 1 e 1 1 e 1 1 1 1 1 . 
        . 1 1 1 1 1 e 1 1 e 1 1 1 1 1 . 
        . . 1 1 1 e e 1 1 e e 1 1 1 . . 
        . . . 1 e e 1 1 1 1 e e 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})
game.onUpdateInterval(10000, function () {
    specialBall = sprites.createProjectileFromSide(img`
        . . . . . . . e e . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 1 f 1 1 1 1 f . . . 
        . . f 1 1 1 1 f 1 1 1 1 1 f . . 
        . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 f 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 f f f f 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f 1 1 1 1 1 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `, randint(-40, 50), randint(-40, 50))
    specialBall.setKind(SpriteKind.Clock)
})
