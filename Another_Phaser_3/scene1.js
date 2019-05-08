var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 500
    },
    inputKeyboard: true,
    inputMouse: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1600 },
            debug: false
        }
    },
    scene: {
        preload: init,
        create: render,
        update: update
    }
};

var game = new Phaser.Game(config);
//Because the structure of the code will be changed dramatically, sections of this code will be
//marked in order to distinguish which scripts they can fit into
function init()
{
    //assets loaded in, main scene
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/concrete.png');
    this.load.image('star', 'assets/star.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
    //24, 48
    this.load.spritesheet('placeholder', 'assets/prototype_sprites.png', {frameWidth: 24, frameHeight: 48});
}
function render() 
{
    //background image
    this.add.image(500, 300, 'sky');
    //adds platforms as a static group, likely to have its own script for physics or something, dont know
    platforms = this.physics.add.staticGroup();
    //base ground
    platforms.create(600, 650, 'ground').setScale(5).refreshBody();
    platforms.create(600, 450, 'ground');
    platforms.create(120, 350, 'ground');
    platforms.create(600, 220, 'ground');
    for (var i = -1; i < 12; i++){
        platforms.create((-i*140), -i*90, 'ground');
    }
    //guy, with properties and collision, frame animations below, derives from entity script
    player = this.physics.add.sprite(100, 450, 'placeholder');
    player.setOrigin()
    
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('placeholder', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'idle',
        frames: [ { key: 'placeholder', frame: 5 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('placeholder', { start: 6, end: 10 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'fire',
        frames: this.anims.generateFrameNumbers('placeholder', {start: 11, end: 14}),
        frameRate: 20
    });
    this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('placeholder', {start: 15, end: 17}),
        frameRate: 10,
    })
    this.anims.create({
        key: 'fall',
        frames: this.anims.generateFrameNumbers('placeholder', {start: 18, end: 20}),
        frameRate: 10
    })
    this.anims.create({
        key: 'crouch',
        frames: [ { key: 'placeholder', frame: 20 } ],
        frameRate: 20
    })
    
    //slash from attack animation, derives from entity script
    slash_graphic = this.add.graphics();
    slashes = this.physics.add.group();

    /*
    Thing to rotate around other thing, may be discarded
    */
    this.stars = this.physics.add.group({
        key:'star',
        frameQuantity: 10
    })

    this.circle = new Phaser.Geom.Circle(player.body.x, player.body.y, 44);

    this.startAngle = this.tweens.addCounter({
        from: 4.5,
        to: 6.5,
        duration: 200,
        repeat: -1
    })

    this.endAngle = this.tweens.addCounter({
        from: 6.5,
        to: 7.5,
        duration: 200,
        repeat: -1
    })

    
    //camera stuff here, might have its own script
    this.cameras.main.startFollow(player, false, 0.1, 0.1);
    
    //set collision of dynamic objects with platforms
    this.physics.add.collider(player, platforms);

    //input detection
    keys = this.input.keyboard.addKeys('UP, LEFT, DOWN, RIGHT, Q, SPACE, SHIFT'); // keys.W, keys.A, keys.S, keys.D, etc.
    
    player.anims.play('idle');
    state = 0;
}

function update()
{
    switch (state)
    {
        case 0: 
            state_default();
            break;
        case 1: 
            state_jump();
            break;
        case 2:
            state_fall();
            break;
        case 3:
            state_fire();
            break;
        case 4:
            state_crouch();
            break;
        case 5:
            state_aerial();
            break;
        case 6:
            state_dash();
            break;
        case 7:
            state_backstep();
            break;
        default:
            state_default();
    }
}


var last_dir = 1
function controls()
{
    left = -Number(keys.LEFT.isDown);
    right = Number(keys.RIGHT.isDown);
    return(left+right);
}
function movement(body_param, speed)
{
    //acceleration has to be done somehow
    body_param.setVelocityX(controls()*speed)
}
/*
    Reminder
    state = 0; default
    state = 1; jumping
    state = 2; falling
    state = 3; firing
    state = 4; crouching
    state = 5; aerial attack
    state = 6; dashing
    state = 7; backstepping
*/

/*
    function used for attacking
    var RotateAroundDistance = function (point, x, y, angle, distance)
    {
        var t = angle + Math.atan2(point.y - y, point.x - x);

        point.x = x + (distance * Math.cos(t));
        point.y = y + (distance * Math.sin(t));

        return point;
    };

*/

function state_default()
{
    movement(player, 340);
    //movement direction
    if (controls() !== 0) {last_dir = controls()}
    if (controls() < 0) {player.anims.play('left', true)}
    else if (controls() > 0) {player.anims.play('right', true)}
    else if(controls() == 0) {player.anims.play('idle')}
    //state transitions
    if (Phaser.Input.Keyboard.JustDown(keys.UP) && player.body.touching.down)
    {
        player.setVelocityY(-720);
        state = 1;
    }
    if (Phaser.Input.Keyboard.JustDown(keys.Q))
    {
        player.setVelocityX(0);
        /*slash = Phaser.Math.RotateAroundDistance(player.body.position, player.body.x, player.body.y, 30, 20)
        slash_graphic.lineStyle(2, 0xff0000, 1);
        slash_graphic.lineTo(slash.x, slash.y)
        slash_graphic.moveTo(slash.x, slash.y);*/
        state = 3
    }
    if (keys.DOWN.isDown)
    {
        player.setVelocityX(0);
        state = 4;
    }
    if (Phaser.Input.Keyboard.JustDown(keys.SPACE)) {state = 6}
    
    if (Phaser.Input.Keyboard.JustDown(keys.SHIFT)) {state = 7}
    
    if (player.body.velocity.y > 0) {state = 2}
}
function state_jump()
{
    movement(player, 340);
    player.anims.play('jump', true);
    if (keys.UP.isUp) {player.body.velocity.y *= 0.65}
    if (Phaser.Input.Keyboard.JustDown(keys.Q)) {state = 5}
    if (player.body.velocity.y > 0) {state = 2}
    if (player.body.touching.down) {state = 0}
}
function state_fall()
{
    movement(player, 340);
    player.anims.play('fall', true);
    if (Phaser.Input.Keyboard.JustDown(keys.Q)) {state = 5}
    if (player.body.touching.down) {state = 0}
}
function state_fire()
{
    //something.disableBody(true,true) //this method will be used to delete the slash sprite from attacks
    player.anims.play('fire', true)

    if (player.anims.getProgress() == 1) {state = 0}
}
function state_crouch()
{
    player.anims.play('crouch');
    if(keys.DOWN.isUp) {state = 0}
}
function state_aerial()
{
    movement(player, 340);
    player.anims.play('fire', true);
    
    if (player.anims.getProgress() == 1) 
    {
        if (player.body.velocity.y > 0) {state = 2}
        else state = 1
    }
    if (player.body.touching.down) {state = 0}
}
function state_dash()
{
    player.anims.play('fire', true);

    if (last_dir == -1) {player.setVelocityX(-800)}
    else player.setVelocityX(800);

    if (player.anims.getProgress() == 1) 
    {
        player.setVelocityX(0);
        state = 0;
    }
}
function state_backstep()
{
    player.anims.play('fall', true);

    if (last_dir == -1) {player.setVelocityX(500)}
    else player.setVelocityX(-500);

    if (player.anims.getProgress() == 1) 
    {
        player.setVelocityX(0);
        state = 0;
    }
}
