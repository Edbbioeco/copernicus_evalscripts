//VERSION=3
//Drought Stress Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B05",
          "B06",
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
  let ndx = sample.B06/sample.B05;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
