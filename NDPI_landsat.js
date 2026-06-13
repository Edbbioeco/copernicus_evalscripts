//VERSION=3
//Triangular Chlorophyll Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = 1.2 * (sample.B05 - sample.B03) - 1.5 * (sample.B04 - sample.B03) * (sample.B05/sample.B04)^0.5;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
