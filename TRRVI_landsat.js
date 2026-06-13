//VERSION=3
//Water Index 2015

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
          "B05",
          "B06",
          "B07",
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
  let ndx = 1.7204 + 171 * sample.B03 + 3 * sample.B04 - 70 * sample.B05 - 45 * sample.B06 - 71 * sample.B07;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
