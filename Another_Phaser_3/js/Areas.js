class Area extends Phaser.GameObjects.Zone 
{
    constructor(scene, x, y, width, height, type)
    {
        super(scene, x, y, width, height)
        this.scene = scene
        this.scene.add.existing(this)
    }
}

class PlayerHurtBox extends Area
{
    constructor(scene, x, y, width, height)
    {
        super(scene, x, y, width, height, "PlayerHurtBox")
    }
}