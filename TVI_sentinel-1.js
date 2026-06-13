//VERSION=3
//Global Vegetation Moisture Index

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
  let ndx = ((sample.B05 + 0.1) - (sample.B07 + 0.02))/((sample.B05 + 0.1) + (sample.B07 + 0.02));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
