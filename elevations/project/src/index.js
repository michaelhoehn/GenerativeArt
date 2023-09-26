// Define params here
$fx.params([
  {
    id: "gridSize",
    name: "Grid Size",
    type: "number",
    default: 10,
    options: {
      min: 5,
      max: 100,
      step: 1,
    },
  },
]);

// Define features here
$fx.features({
  "Grid Size": $fx.getParam("gridSize"),
  // "A random boolean": $fx.rand() > 0.5,
  // "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
  // "Feature from params, its a number": $fx.getParam("number_id"),
});
