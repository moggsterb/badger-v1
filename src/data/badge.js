const MOCK_SHAPES = {
  default: [
    {
      icon: `<polygon fill='#FFFFFF' stroke='#000000' points='200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295' />`,
      variants: [
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="1" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="2" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="3" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="4" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="5" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="6" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="7" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
        { data: `	<polygon fill="#FFFFFF" stroke="#000000" stroke-width="8" points="200,15 244.902,153.197 390.211,153.197 272.654,238.606 317.557,376.804 200,291.394 82.443,376.804 127.346,238.606 9.789,153.197 155.097,153.197 	"/>`},
      ]
    },
    {
      icon: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="1" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`,
      variants: [
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="1" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="2" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="3" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="4" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="5" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="6" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="7" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="8" points="200,390 35.456,295 35.456,105.001 200,10.001 364.545,105.001 364.545,295 	"/>`},
      ]
    },
    {
      icon: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="1" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>`,
      variants: [
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="1" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="2" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="3" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="4" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="5" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="6" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="7" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` },
        { data: `<polygon display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="8" points="50,50 350,50 350,200 250,350 150,350 50,200 "/>` }
      ]
    },
    {
      icon: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="1" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>`,
      variants: [
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="1" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="2" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="3" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="4" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="5" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="6" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="7" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` },
        { data: `<path display="inline" fill="#FFFFFF" stroke="#000000" stroke-width="8" d="M350,155c0,96.649-67.157,225-150,225 S50,251.649,50,155c0-96.65,67.157-140,150-140S350,58.35,350,155z"/>` }
      ]
    },
    {
      icon: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="1" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>`,
      variants: [
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="1" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="2" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="3" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="4" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="5" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="6" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="7" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` },
        { data: `<polygon fill="#FFFFFF" stroke="#000000" stroke-width="8" points="50,50 100,100 50,100 30,150 70,150 50,250 100,350 150,335 200,350 250,335 300,350 350,250 325,150 375,150 350,100 300,100 350,50 200,35 	"/>` }
      ]
    },
    {
      icon: ``,
      variants: [
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
      ]
    },
    {
      icon: ``,
      variants: [
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
      ]
    },
    {
      icon: ``,
      variants: [
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
        { data: `` },
      ]
    },
  ]
}

class Badge {

  constructor(shape,style) {
    this.shape = shape;
    this.style = style;
    this.id = (+new Date() + Math.floor(Math.random() * 9999999)).toString(36);
  }

  shapeData() {
    return MOCK_SHAPES.default[this.shape[6]-1].variants[this.style[6]-1].data;
  }
}

module.exports = Badge;
