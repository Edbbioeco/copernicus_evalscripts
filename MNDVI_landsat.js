//VERSION=3
//Simple Ratio (860, 550 and 708 nm)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B05",
          "B8A",
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
  let ndx = sample.B8A/(sample.B03 * sample.B05);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
