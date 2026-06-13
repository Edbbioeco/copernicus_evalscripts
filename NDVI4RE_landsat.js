//VERSION=3
//Transformed Triangular Vegetation Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B06",
          "B07",
          "B8A",
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
  let ndx = 0.5 * ((865 - 740) * (sample.B07 - sample.B06) - (sample.B8A - sample.B06) * (783 - 740));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
