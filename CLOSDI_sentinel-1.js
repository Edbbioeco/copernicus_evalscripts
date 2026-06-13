//VERSION=3
//Automated Water Extraction Index with Shadows Elimination

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
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
  let ndx = sample.B02 + 2.5 * sample.B03 - 1.5 * (sample.B05 + sample.B06) - 0.25 * sample.B07;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
