import shipImg from '../assets/img/spaceship.png';
import jetImg from '../assets/img/jet.png';
import fireImg from '../assets/img/fire.png';
import moonImg from '../assets/img/moon.png';

function preload() {
  this.load.image('ship', shipImg);
  this.load.image('jet', jetImg);
  this.load.image('fire', fireImg);
  this.load.image('moon', moonImg);
}

export default preload;
