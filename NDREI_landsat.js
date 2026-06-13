//VERSION=3
//Transformed Difference Vegetation Index

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
  let ndx = 1.5 * ((sample.B08 - sample.B04)/((sample.B08^2 + sample.B04 + 0.5)^0.5));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
