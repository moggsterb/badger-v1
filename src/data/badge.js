class Badge {
  constructor(shape,style) {
    this.shape = shape;
    this.style = style;
    this.id = (+new Date() + Math.floor(Math.random() * 9999999)).toString(36);
  }

  shapeData() {
    x = []
    x.push("<polygon fill='#FFFFFF' stroke='#000000' points='200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295' />");
    x.push("<polygon fill='#FFFFFF' stroke='#000000' points='200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197'/>");
    return x[this.shape[6]-1]
  }
}

module.exports = Badge;
