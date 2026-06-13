//VERSION=3
//Carotenoid Reflectance Index using 550 nm

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B03",
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
  let ndx = (1/sample.B02) - (1/sample.B03);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
