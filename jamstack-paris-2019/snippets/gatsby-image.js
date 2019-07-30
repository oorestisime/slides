const fluidSizes = [
  options[fixedDimension] // ensure maxWidth (or maxHeight) is added
];
if (!options.srcSetBreakpoints || !options.srcSetBreakpoints.length) {
  fluidSizes.push(options[fixedDimension] / 4);
  fluidSizes.push(options[fixedDimension] / 2);
  fluidSizes.push(options[fixedDimension] * 1.5);
  fluidSizes.push(options[fixedDimension] * 2);
} else {
  // add config options
}
const filteredSizes = fluidSizes.filter(
  size => size < (fixedDimension === `maxWidth` ? width : height)
);
