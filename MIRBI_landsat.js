//VERSION=3
//Simple Ratio (800 and 550 nm)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = sample.B08/sample.B03;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
