//console.log(fxhash);
//console.log(fxrand());

const sp = new URLSearchParams(window.location.search);
//console.log(sp);

// this is how to define parameters
$fx.params([
  {
    id: "rowCount",
    name: "Row Count",
    type: "number",
    //default: Math.PI,
    options: {
      min: 2,
      max: 20,
      step: 1,
    },
  },
  {
    id: "bigint_id",
    name: "A bigint",
    type: "bigint",
    //default: BigInt(Number.MAX_SAFE_INTEGER * 2),
    options: {
      min: Number.MIN_SAFE_INTEGER * 4,
      max: Number.MAX_SAFE_INTEGER * 4,
      step: 1,
    },
  },
  {
    id: "select_id",
    name: "A selection",
    type: "select",
    //default: "pear",
    options: {
      options: ["apple", "orange", "pear"],
    },
  },
  {
    id: "color_id",
    name: "A color",
    type: "color",
    default: "ff0000",
  },
  {
    id: "boolean_id",
    name: "A boolean",
    type: "boolean",
    //default: true,
  },
  {
    id: "string_id",
    name: "A string",
    type: "string",
    //default: "hello",
    options: {
      minLength: 1,
      maxLength: 64,
    },
  },
]);

// this is how features can be defined
$fx.features({
  "Row Count": $fx.getParam("rowCount"),
  "A random boolean": $fx.rand() > 0.5,
  "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand() * 4)),
  "Feature from params, its a number": $fx.getParam("number_id"),
});

// log the parameters, for debugging purposes, artists won't have to do that
console.log("Current param values:");
// Raw deserialize param values
console.log($fx.getRawParams());
// Added addtional transformation to the parameter for easier usage
// e.g. color.hex.rgba, color.obj.rgba.r, color.arr.rgb[0]
console.log($fx.getParams());

// how to read a single raw parameter
console.log("Single raw value:");
console.log($fx.getRawParam("color_id"));
// how to read a single transformed parameter
console.log("Single transformed value:");
console.log($fx.getParam("color_id"));

// IMPORTANT - If using fx(params) you need to actively update the DOM with features

// update the document based on the parameters
//document.body.style.background = $fx.getParam("color_id").hex.rgba;
// document.body.innerHTML = `
// <p>
// url: ${window.location.href}
// </p>
// <p>
// hash: ${$fx.hash}
// </p>
// <p>
// params:
// </p>
// <pre>
// ${$fx.stringifyParams($fx.getRawParams())}
// </pre>
// <pre style="color: white;">
// ${$fx.stringifyParams($fx.getRawParams())}
// </pre>
// `;
