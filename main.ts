namespace SpriteKind {
    export const mascota = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Noise, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
info.onScore(28, function () {
    game.setGameOverEffect(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Noise, 1600, 5000, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f 1 1 1 1 f 2 f . . . 
    . . . f f 1 1 1 1 f 2 2 2 f . . 
    . . . f 1 1 1 f f 1 1 1 1 f . . 
    . . . f f f f 1 1 2 2 2 2 1 f . 
    . . . f 1 2 2 2 f f f f 1 2 f . 
    . . f f f f f f f 1 1 1 f f f . 
    . . f f 1 4 4 1 b f 4 4 1 1 f . 
    . . f 1 1 4 e 4 1 f e e 1 f . . 
    . . . f 1 1 1 4 e e e e f . . . 
    . . . . 4 e e 1 4 4 4 1 f . . . 
    . . . . 1 e e 1 2 2 2 2 f . . . 
    . . . . f 1 1 f 4 4 1 1 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `, SpriteKind.Player)
mySprite.setPosition(34, 35)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 600
mySprite.follow(mySprite2, 60)
info.setScore(0)
mySprite2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b 2 1 2 b f c c . . 
    . f b b b b b 2 1 2 c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.mascota)
scene.cameraFollowSprite(mySprite)
forever(function () {
    mySprite2.follow(mySprite)
})
