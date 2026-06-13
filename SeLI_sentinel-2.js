//VERSION=3
//Normalized Multi-band Drought Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B08",
          "B11",
          "B12",
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
  let ndx = (sample.B08 - (sample.B11 - sample.B12))/(sample.B08 + (sample.B11 - sample.B12));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
