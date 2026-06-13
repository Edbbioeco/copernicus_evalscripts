//VERSION=3
//Automated Water Extraction Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = 4 * (sample.B03 - sample.B06) - 0.25 * sample.B05 + 2.75 * sample.B07;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
