//VERSION=3
//Inverted Red-Edge Chlorophyll Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
          "B05",
          "B06",
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
  let ndx = (sample.B07 - sample.B04)/(sample.B05/sample.B06);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
