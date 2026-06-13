//VERSION=3
//Modified Triangular Vegetation Index 1

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = 1.2 * (1.2 * (sample.B08 - sample.B03) - 2.5 * (sample.B04 - sample.B03));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
