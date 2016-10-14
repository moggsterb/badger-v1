const MOCK_THEMES = {
  default: [
    {
      colors: [
        [Adjust('#51a39d',-0.3),Adjust('#b7695c',-0.3),Adjust('#cdbb79',-0.3),Adjust('#f2f2f2',-0.3),Adjust('#06425c',-0.3)],
        ['#51a39d','#b7695c','#cdbb79','#f2f2f2','#06425c'],
        [Adjust('#51a39d',0.3),Adjust('#b7695c',0.3),Adjust('#cdbb79',0.3),Adjust('#f2f2f2',0.3),Adjust('#06425c',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#44b3c2',-0.3),Adjust('#f1a9e4',-0.3),Adjust('#e45641',-0.3),Adjust('#5d4c46',-0.3),Adjust('#f2edd8',-0.3)],
        ['#44b3c2','#f1a9e4','#e45641','#5d4c46','#f2edd8'],
        [Adjust('#44b3c2',0.3),Adjust('#f1a9e4',0.3),Adjust('#e45641',0.3),Adjust('#5d4c46',0.3),Adjust('#f2edd8',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#525564',-0.3),Adjust('#74828f',-0.3),Adjust('#96c0ce',-0.3),Adjust('#beb9b5',-0.3),Adjust('#c25b56',-0.3)],
        ['#525564','#74828f','#96c0ce','#beb9b5','#c25b56'],
        [Adjust('#525564',0.3),Adjust('#74828f',0.3),Adjust('#96c0ce',0.3),Adjust('#beb9b5',0.3),Adjust('#c25b56',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#e8d0a9',-0.3),Adjust('#b7afa3',-0.3),Adjust('#c1dad6',-0.3),Adjust('#f5fafa',-0.3),Adjust('#6d929b',-0.3)],
        ['#e8d0a9','#b7afa3','#c1dad6','#f5fafa','#6d929b'],
        [Adjust('#e8d0a9',0.3),Adjust('#b7afa3',0.3),Adjust('#c1dad6',0.3),Adjust('#f5fafa',0.3),Adjust('#6d929b',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#b7c68b',-0.3),Adjust('#f4f0cb',-0.3),Adjust('#ded29e',-0.3),Adjust('#b3a580',-0.3),Adjust('#685642',-0.3)],
        ['#b7c68b','#f4f0cb','#ded29e','#b3a580','#685642'],
        [Adjust('#b7c68b',0.3),Adjust('#f4f0cb',0.3),Adjust('#ded29e',0.3),Adjust('#b3a580',0.3),Adjust('#685642',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#7eb5d6',-0.3),Adjust('#2a75a9',-0.3),Adjust('#274257',-0.3),Adjust('#dfc184',-0.3),Adjust('#644436',-0.3)],
        ['#7eb5d6','#2a75a9','#274257','#dfc184','#644436'],
        [Adjust('#7eb5d6',0.3),Adjust('#2a75a9',0.3),Adjust('#274257',0.3),Adjust('#dfc184',0.3),Adjust('#644436',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#397249',-0.3),Adjust('#628b61',-0.3),Adjust('#9cb770',-0.3),Adjust('#c7e1ba',-0.3),Adjust('#f6e4cc',-0.3)],
        ['#397249','#628b61','#9cb770','#c7e1ba','#f6e4cc'],
        [Adjust('#397249',0.3),Adjust('#628b61',0.3),Adjust('#9cb770',0.3),Adjust('#c7e1ba',0.3),Adjust('#f6e4cc',0.3)]
      ]
    },
    {
      colors: [
        [Adjust('#4f2412',-0.3),Adjust('#c9a798',-0.3),Adjust('#e9e0db',-0.3),Adjust('#f9f6f4',-0.3),Adjust('#cccccc',-0.3)],
        ['#4f2412','#c9a798','#e9e0db','#f9f6f4','#cccccc'],
        [Adjust('#4f2412',0.3),Adjust('#c9a798',0.3),Adjust('#e9e0db',0.3),Adjust('#f9f6f4',0.3),Adjust('#cccccc',0.3)]
      ]
    }
  ]
}

function Adjust(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

module.exports = MOCK_THEMES;
