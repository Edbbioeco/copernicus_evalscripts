//VERSION=3
//Disease-Water Stress Index 5

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
          "B08",
          "B11",
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
  let ndx = (sample.B08 + sample.B03)/(sample.B11 + sample.B04);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
