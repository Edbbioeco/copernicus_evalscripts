//VERSION=3
//Visible Atmospherically Resistant Index (700 nm)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
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
  let ndx = (sample.B05 - 1.7 * sample.B04 + 0.7 * sample.B02)/(sample.B05 + 1.3 * sample.B04 - 1.3 * sample.B02);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
