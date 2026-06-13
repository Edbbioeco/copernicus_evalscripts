//VERSION=3
//Enhanced Vegetation Index of Vegetation

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
  let ndx = 2.5 * ((sample.B05 - sample.B04)/(sample.B05 + 6 * sample.B04 - 7.5 * sample.B02 + 1)) * sample.B05;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
