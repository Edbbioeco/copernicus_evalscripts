//VERSION=3
//Modified Simple Ratio

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
          "B05",
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
  let ndx = (sample.B05/sample.B04 - 1)/((sample.B05/sample.B04 + 1)^0.5);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
