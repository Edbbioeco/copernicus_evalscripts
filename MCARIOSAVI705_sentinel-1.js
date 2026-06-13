//VERSION=3
//Carotenoid Reflectance Index using 700 nm

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
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
  let ndx = (1/sample.B02) - (1/sample.B05);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
