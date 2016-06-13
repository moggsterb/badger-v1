class Badge {
  constructor(shape) {
    this.shape = shape;
    this.id = (+new Date() + Math.floor(Math.random() * 9999999)).toString(36);
  }
}

module.exports = Badge;
