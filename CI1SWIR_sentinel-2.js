//VERSION=3
//Modified Land Surface Water Index (MODIS Bands 2 and 7)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B05",
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
  let ndx = (1 - sample.B05 - sample.B07)/(1 - sample.B05 + sample.B07);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
