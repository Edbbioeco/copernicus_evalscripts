//VERSION=3
//Perpendicular Impervious Surface Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B08",
          "dataMask"
        ],
      },
   ],
  output: [ // this defines the output image type
    {
      id: "default",
      bands: ["index"],
      sampleType: "FLOAT32"
    },
    {
      id: "dataMask",
      bands: 1
    }]
  }
}

function evaluatePixel(sample) {
  // this computes the index value
  let ndx = 0.8192 * sample.B02 - 0.5735 * sample.B08 + 0.075;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
