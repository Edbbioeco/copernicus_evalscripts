//VERSION=3
//Modified Land Surface Water Index (MODIS Bands 2 and 6)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B08",
          "B11",
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
  let ndx = (1 - sample.B08 - sample.B11)/(1 - sample.B08 + sample.B11);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
