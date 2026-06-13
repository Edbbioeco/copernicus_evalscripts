//VERSION=3
//Normalized Multi-band Drought Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
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
  let ndx = (sample.B05 - (sample.B06 - sample.B07))/(sample.B05 + (sample.B06 - sample.B07));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
