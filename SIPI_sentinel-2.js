//VERSION=3
//Non-Homogeneous Feature Difference

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B01",
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
  let ndx = (sample.B05 - sample.B01)/(sample.B05 + sample.B01);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
