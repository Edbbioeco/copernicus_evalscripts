//VERSION=3
//Normalized Difference Bareness Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B06",
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
  let ndx = (sample.B06 - sample.B10)/(sample.B06 + sample.B10);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
