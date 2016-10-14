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
    return MOCK_SHAPES.default[this.shape];
  }

  shapeEnabled(index) {
    return (MOCK_SHAPES.default.length > index);
  }

  styleEnabled(index) {
    return (MOCK_SHAPES.default[this.shape].variants.length > index);
  }

  iconData() {
    return MOCK_ICONS.default[this.icon].data;
  }

  iconEnabled(index) {
    return (MOCK_ICONS.default.length > index);
  }

  themeData() {
    return MOCK_THEMES.default[this.theme].colors.slice(0);
  }

  themeEnabled(index) {
    return (MOCK_THEMES.default.length > index);
  }

  buildShape() {
    // establish structure
    console.log("BUILDING SHAPE !!!");
    var structure = this.shapeData().structure.slice(0);
    var data = new Array(structure.length);
    var common = this.shapeData().common;
    var variant = this.shapeData().variants[this.style];
    var th_t = this.themeData()[0].slice(0);
    var th_c = this.themeData()[1].slice(0);
    var th_s = this.themeData()[2].slice(0);
    for (i = 0; i < this.shuffle; i++)
    {
      th_t.push(th_t.shift());
      th_c.push(th_c.shift());
      th_s.push(th_s.shift());
    };

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
    layers = layers.replace(/#000000/g,th_c[0]).replace(/#FFFFFF/g,th_c[1]).replace(/#FF0000/g,th_c[2]).replace(/#00FF00/g,th_c[3]).replace(/#0000FF/g,th_c[4]);
    // tones
    layers = layers.replace(/#83BDB9/g,th_t[0]).replace(/#CB948B/g,th_t[1]).replace(/#DACD9F/g,th_t[2]).replace(/#E9E9E9/g,th_t[3]).replace(/#4F798B/g,th_t[4]);
    // colours
    layers = layers.replace(/#51A49E/g,th_c[0]).replace(/#B7695C/g,th_c[1]).replace(/#CDBB79/g,th_c[2]).replace(/#E2E2E2/g,th_c[3]).replace(/#06425C/g,th_c[4]);
    // shades
    layers = layers.replace(/#39726E/g,th_s[0]).replace(/#804940/g,th_s[1]).replace(/#8F8354/g,th_s[2]).replace(/#9E9E9E/g,th_s[3]).replace(/#042E40/g,th_s[4]);
    return layers;
  }
}

module.exports = Badge;
