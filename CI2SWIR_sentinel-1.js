//VERSION=3
//Automated Water Extraction Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = 4 * (sample.B03 - sample.B11) - 0.25 * sample.B08 + 2.75 * sample.B12;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
