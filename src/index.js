import Phaser from 'phaser';
import preload from './preload';
import create from './create';

function update() {}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backGround: 0x000000,
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);
