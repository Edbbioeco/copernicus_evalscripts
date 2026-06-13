//VERSION=3
//NIR-SWIR-Temperature Version 1

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B05",
          "B07",
          "B10",
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
  let ndx = ((sample.B05 - sample.B07)/(sample.B05 + sample.B07)) * sample.B10;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
