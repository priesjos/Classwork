class SceneMain extends Phaser.Scene {
    constructor() 
    {
        super({ key: "SceneMain" });
    }

    preload() 
    {
        this.load.image("sprBg0", "assets/sprBg0.png");
        this.load.image("sprBg1", "assets/sprBg1.png");
        this.load.spritesheet("sprExplosion", "assets/sprExplosion.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("sprEnemy0", "assets/sprEnemy0.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image("sprEnemy1", "assets/sprEnemy1.png");
        this.load.spritesheet("sprEnemy2", "assets/sprEnemy2.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.image("sprLaserEnemy0", "assets/sprLaserEnemy0.png");
        this.load.image("sprLaserPlayer", "assets/sprLaserPlayer.png");
        this.load.spritesheet("sprPlayer", "assets/sprPlayer.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.audio("sndExplode0", "assets/sndExplode0.wav");
        this.load.audio("sndExplode1", "assets/sndExplode1.wav");
        this.load.audio("sndLaser", "assets/sndLaser.wav");
    }
    
    create() 
    {
        this.anims.create({
            key: "sprEnemy0",
            frames: this.anims.generateFrameNumbers("sprEnemy0"),
            frameRate: 20,
            repeat: -1
          });
        this.anims.create({
            key: "sprEnemy2",
            frames: this.anims.generateFrameNumbers("sprEnemy2"),
            frameRate: 20,
            repeat: -1
          });
        this.anims.create({
            key: "sprExplosion",
            frames: this.anims.generateFrameNumbers("sprExplosion"),
            frameRate: 20,
            repeat: 0
          });
        this.anims.create({
            key: "sprPlayer",
            frames: this.anims.generateFrameNumbers("sprPlayer"),
            frameRate: 20,
            repeat: -1
        });

        this.sfx = {
            explosions: [
              this.sound.add("sndExplode0"),
              this.sound.add("sndExplode1")
            ],
            laser: this.sound.add("sndLaser")
        };

        this.backgrounds = [];
        for (var i = 0; i < 5; i++) // create five scrolling backgrounds
        { 
            var bg = new ScrollingBackground(this, "sprBg0", i * 10);
            this.backgrounds.push(bg);
        }

        this.player = new Player(
            this,
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "sprPlayer"
        ); 

        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.enemies = this.add.group();
        this.enemyLasers = this.add.group();
        this.playerLasers = this.add.group();

        this.time.addEvent({
            delay: 500,
            callback: function () {
                var enemy = new GunShip(this, Phaser.Math.Between(0, this.game.config.width), 0);
                this.enemies.add(enemy);
            },
            callbackScope: this,
            loop: true
        });

        
    }

    update()
    {
        this.player.update();

        for (var i = 0; i < this.backgrounds.length; i++) {this.backgrounds[i].update()}

        //the for loops below destroy items that get beyond the camera boundaries
        for (var i = 0; i < this.enemies.getChildren().length; i++)
        {
            var enemy = this.enemies.getChildren()[i];
            enemy.update();

            if (enemy.x < -enemy.displayWidth ||
                enemy.x > this.game.config.width + enemy.displayWidth ||
                enemy.y < -enemy.displayHeight * 4 ||
                enemy.y > this.game.config.height + enemy.displayHeight) {
                if (enemy) 
                {
                    if (enemy.onDestroy !== undefined) {enemy.onDestroy()}
                    enemy.destroy();
                }
            }
        }

        for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
            var laser = this.enemyLasers.getChildren()[i];
            laser.update();
            if (laser.x < -laser.displayWidth ||
                laser.x > this.game.config.width + laser.displayWidth ||
                laser.y < -laser.displayHeight * 4 ||
                laser.y > this.game.config.height + laser.displayHeight) {
                    if (laser) {laser.destroy()}
                }
        }

        for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
            var laser = this.playerLasers.getChildren()[i];
            laser.update();
            if (laser.x < -laser.displayWidth ||
                laser.x > this.game.config.width + laser.displayWidth ||
                laser.y < -laser.displayHeight * 4 ||
                laser.y > this.game.config.height + laser.displayHeight) {
                    if (laser) {laser.destroy()}
                }
        }
        if (this.keyW.isDown) {this.player.moveUp()}
        else if (this.keyS.isDown) {this.player.moveDown()}
        if (this.keyA.isDown) {this.player.moveLeft()}
        else if (this.keyD.isDown) {this.player.moveRight()}

        if (this.keySpace.isDown){this.player.setData("isShooting", true)}
        else {
            this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
            this.player.setData("isShooting", false);
        }
    }
}