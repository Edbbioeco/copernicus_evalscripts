//VERSION=3
//Red-Edge Disease Stress Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
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
  let ndx = ((705 - 665) * (sample.B07 - sample.B04) - (783 - 665) * (sample.B05 - sample.B04))/(2 * sample.B04);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
