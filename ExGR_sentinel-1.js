//VERSION=3
//Band Ratio for Built-up Area

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
          "B06",
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
  let ndx = sample.B04/sample.B06;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
