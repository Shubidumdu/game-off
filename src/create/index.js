function create() {
  this.add.image(400, 500, 'ship');
  this.add.image(400, 50, 'moon');
  const jet = this.add.image(400, 200, 'jet').setInteractive();
  this.input.setDraggable(jet);
  jet.on('dragstart', function (pointer) {
    this.setTint(0xff0000);
  });
  jet.on('drag', function (pointer, dragX, dragY) {
    this.x = dragX;
    this.y = dragY;
  });
  jet.on('dragend', function (pointer) {
    this.clearTint();
  });
}

export default create;
