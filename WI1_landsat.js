//VERSION=3
//Modified Simple Ratio (705 and 445 nm)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B01",
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
  let ndx = (sample.B06 - sample.B01)/(sample.B06 + sample.B01);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
