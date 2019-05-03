class Entity extends Phaser.GameObjects.Sprite 
{
    constructor(scene, x, y, key, type) 
    {
        super(scene, x, y, key)
        this.scene = scene
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
        this.setData("isDead", false);
    }
}

class Player extends Entity 
{
    constructor(scene, x, y, key) 
    {
        super(scene, x, y, key, "Player");
        this.setData("speed", 200);
        this.setData("isShooting", false);
        this.setData("timerShootDelay", 8);
        this.setData("timerShootTick", this.getData("timeShootDelay") - 1);
        this.play("sprPlayer");
    }

    moveUp() {this.body.velocity.y = -this.getData("speed")}

    moveDown() {this.body.velocity.y = this.getData("speed")}

    moveLeft() {this.body.velocity.x = -this.getData("speed")}

    moveRight() {this.body.velocity.x = this.getData("speed")}

    update()
    {
        this.body.setVelocity(0, 0);

        this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
        this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
        if (this.getData("isShooting")) 
        {
            if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
                this.setData("timerShootTick", this.getData("timerShootTick") + 1); // every game update, increase timerShootTick by one until we reach the value of timerShootDelay
            }
            else { // when the "manual timer" is triggered:
                var laser = new PlayerLaser(this.scene, this.x, this.y);
                this.scene.playerLasers.add(laser);
            
                this.scene.sfx.laser.play(); 
                this.setData("timerShootTick", 0);
            }
        }
    }
}

class PlayerLaser extends Entity
{
    constructor(scene, x, y) {
        super(scene, x, y, "sprLaserPlayer");
        this.body.velocity.y = -200;
    }
}

class EnemyLaser extends Entity 
{
    constructor(scene, x, y)
    {
        super(scene, x, y, "sprLaserEnemy0");
        this.body.velocity.y = 200;
    }
}

class GunShip extends Entity 
{
    constructor(scene, x, y) 
    {
        super(scene, x, y, "sprEnemy0", "GunShip");
        this.body.velocity.y = Phaser.Math.Between(50, 100);

        this.shootTimer = this.scene.time.addEvent({
            delay: 800,
            callback: function() {
                var laser = new EnemyLaser(this.scene, this.x, this.y);
                laser.setScale(this.scaleX);
                this.scene.enemyLasers.add(laser);
            },
            callbackScope: this,
            loop: true
        });

        this.play("sprEnemy0");
    }

    onDestroy()
    {
        if (this.shootTimer !== undefined) {
            if (this.shootTimer) {this.shootTimer.remove(false)}
        }
    }
}

class ScrollingBackground {
    constructor(scene, key, velocityY)
    {
        this.scene = scene;
        this.key = key;
        this.velocityY = velocityY;
        this.layers = this.scene.add.group();
        this.createLayers()
    }
    createLayers()
    {
        for (var i = 0; i < 2; i++) 
        {
            // creating two backgrounds will allow a continuous scroll
            var layer = this.scene.add.sprite(0, 0, this.key);
            layer.y = (layer.displayHeight * i);
            var flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            var flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
            layer.setScale(flipX * 2, flipY * 2);
            layer.setDepth(-5 - (i - 1));
            this.scene.physics.world.enableBody(layer, 0);
            layer.body.velocity.y = this.velocityY;
            this.layers.add(layer);
        }
    }

    update()
    {
        if (this.layers.getChildren()[0].y > 0) 
        {
            for (var i = 0; i < this.layers.getChildren().length; i++) 
            {
              var layer = this.layers.getChildren()[i];
              layer.y = (-layer.displayHeight) + (layer.displayHeight * i);
            }
        }
      
    }
}