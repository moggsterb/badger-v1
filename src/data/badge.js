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
    var th_s = this.themeData()[0].slice(0);
    var th_c = this.themeData()[1].slice(0);
    var th_t = this.themeData()[2].slice(0);
    console.log("Shuffle:" + this.shuffle);
    console.log(th_t);;
    for (i = 0; i < this.shuffle; i++)
    {
      th_t.push(th_t.shift());
      th_c.push(th_c.shift());
      th_s.push(th_s.shift());
    };
    console.log(th_t);;

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

    // ['#2A3846','#C04336','#C4C6C7','#D1C521','#286D9A'],
    // ['#2C3E50','#E74C3C','#ECF0F1','#FCEE21','#2980B9'],
    // ['#566573','#EC7063','#F0F3F4','#FDF14D','#5499C7'],

    // shades
    layers = layers.replace(/#2A3846/g,th_s[0]).replace(/#C04336/g,th_s[1]).replace(/#C4C6C7/g,th_s[2]).replace(/#D1C521/g,th_s[3]).replace(/#286D9A/g,th_s[4]);
    // colours
    layers = layers.replace(/#2C3E50/g,th_c[0]).replace(/#E74C3C/g,th_c[1]).replace(/#ECF0F1/g,th_c[2]).replace(/#FCEE21/g,th_c[3]).replace(/#2980B9/g,th_c[4]);
    // tones
    layers = layers.replace(/#566573/g,th_t[0]).replace(/#EC7063/g,th_t[1]).replace(/#F0F3F4/g,th_t[2]).replace(/#FDF14D/g,th_t[3]).replace(/#5499C7/g,th_t[4]);
    return layers;
  }
}

module.exports = Badge;
