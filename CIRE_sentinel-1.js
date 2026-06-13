//VERSION=3
//Automated Water Extraction Index with Shadows Elimination

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
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
  let ndx = sample.B02 + 2.5 * sample.B03 - 1.5 * (sample.B08 + sample.B11) - 0.25 * sample.B12;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
