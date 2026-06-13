//VERSION=3
//Structure Insensitive Pigment Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B01",
          "B04",
          "B08",
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
  let ndx = (sample.B08 - sample.B01)/(sample.B08 - sample.B04);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
