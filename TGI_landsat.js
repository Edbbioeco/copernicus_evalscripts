//VERSION=3
//Water Index 2015

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
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
  let ndx = 1.7204 + 171 * sample.B03 + 3 * sample.B04 - 70 * sample.B08 - 45 * sample.B11 - 71 * sample.B12;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
