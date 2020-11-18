import Phaser from 'phaser';

function preload() {}

function create() {}

function update() {}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backGround: 0x000000,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);
