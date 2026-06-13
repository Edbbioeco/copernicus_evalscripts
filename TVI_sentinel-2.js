//VERSION=3
//Normalized Rapeseed Flowering Index Red

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
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
  let ndx = (sample.B04 - sample.B07)/(sample.B04 + sample.B07);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
