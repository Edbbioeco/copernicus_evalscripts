//VERSION=3
//Blue Chromatic Coordinate

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B03",
          "B04",
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
  let ndx = sample.B02/(sample.B04 + sample.B03 + sample.B02);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
