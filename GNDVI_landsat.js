//VERSION=3
//Subtractive Coastal Water Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B03",
          "B08",
          "B11",
          "B12",
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
  let ndx = sample.B02 + 2 * (sample.B03 - sample.B08) - 0.75 * sample.B11 - 0.5 * sample.B12;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
