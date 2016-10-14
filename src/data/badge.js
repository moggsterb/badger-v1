var MOCK_SHAPES = require('../mock/mockShapes');
var MOCK_ICONS = require('../mock/mockIcons');
var MOCK_THEMES = require('../mock/mockThemes');

class Badge {

  constructor(shape,style,icon,theme,shuffle,textA,textB) {
    this.shape = shape;
    this.style = style;
    this.icon = icon;
    this.theme = theme;
    this.shuffle = shuffle;
    this.TextA = textA;
    this.TextB = textB;
    this.id = (+new Date() + Math.floor(Math.random() * 9999999)).toString(36);
  }

  shapeData() {
    // return MOCK_SHAPES.default[this.shape].variants[this.style].data;
    return MOCK_SHAPES.default[this.shape]
  }

  iconData() {
    return MOCK_ICONS.default[this.icon].data;
  }

  themeData() {
    return MOCK_THEMES.default[this.theme].colors.slice(0);
  }

  buildShape() {
    // establish structure
    var structure = this.shapeData().structure.slice(0);
    var data = new Array(structure.length);
    var common = this.shapeData().common;
    var variant = this.shapeData().variants[this.style];
    var th = this.themeData();
    var layers = ""
    for (i = 0; i < structure.length; i++) {
      var layer = "";
      if (structure[i] in common) {
        layer = common[structure[i]];
      }
      if (structure[i] in variant) {
        layer = variant[structure[i]];
      }
      if (structure[i] == 'icon') {
        layer = this.iconData();
      }
      layers = layers.concat(layer)
    };
    // legacy colours (for the original placeholder colours)
    layers = layers.replace(/#000000/g,th[1][0]).replace(/#FFFFFF/g,th[1][1]).replace(/#FF0000/g,th[1][2]).replace(/#00FF00/g,th[1][3]).replace(/#0000FF/g,th[1][4]);

    // tones
    layers = layers.replace(/#83BDB9/g,th[0][0]).replace(/#CB948B/g,th[0][1]).replace(/#DACD9F/g,th[0][2]).replace(/#E9E9E9/g,th[0][3]).replace(/#4F798B/g,th[0][4]);
    // colours
    layers = layers.replace(/#51A49E/g,th[1][0]).replace(/#B7695C/g,th[1][1]).replace(/#CDBB79/g,th[1][2]).replace(/#E2E2E2/g,th[1][3]).replace(/#06425C/g,th[1][4]);
    // shades
    layers = layers.replace(/#39726E/g,th[2][0]).replace(/#804940/g,th[2][1]).replace(/#8F8354/g,th[2][2]).replace(/#9E9E9E/g,th[2][3]).replace(/#042E40/g,th[2][4]);
    return layers;
  }
}

module.exports = Badge;
