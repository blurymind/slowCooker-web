test 123
123 

gdjs.PixiFiltersTools.registerFilterCreator('MultiColorReplace', {
  makePIXIFilter: function(layer, effectData) {
    var multiColorReplaceFilter = new PIXI.filters.MultiColorReplaceFilter();

    return multiColorReplaceFilter;
  },
  update: function(filter, layer) {
  },
  updateDoubleParameter: function(filter, parameterName, value) {
    if (parameterName === 'epsilon') {
      filter.epsilon = value;
    }
  },
  updateStringParameter: function(filter, parameterName, value) {
    if (parameterName === 'original 0') {
      filter.original 0 = value.replace('#', '0x');
    }
    if (parameterName === 'target 0') {
      filter.target 0 = value.replace('#', '0x');
    }
    if (parameterName === 'original 1') {
      filter.original 1 = value.replace('#', '0x');
    }
    if (parameterName === 'target 1') {
      filter.target 1 = value.replace('#', '0x');
    }
    if (parameterName === 'original 2') {
      filter.original 2 = value.replace('#', '0x');
    }
    if (parameterName === 'target 2') {
      filter.target 2 = value.replace('#', '0x');
    }
  },
  updateBooleanParameter: function(filter, parameterName, value) {
  },
});
