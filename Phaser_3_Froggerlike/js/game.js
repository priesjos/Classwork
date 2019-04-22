//new scene, "Game"
let gameScene = new Phaser.Scene('Game');

//game's config
let config = { 
    type: Phaser.AUTO, //render type
    width: 640, 
    height: 360,
    scene: gameScene
};

//create game, passing it config

let game = new Phaser.Game(config);

