//VERSION=3
//Modified Soil-Adjusted Vegetation Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
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
  let ndx = 0.5 * (2 * sample.B08 + 1 - (((2 * sample.B08 + 1)^2) - 8 * (sample.B08 - sample.B04))^0.5);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
