//VERSION=3
//Mid-Infrared Burn Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
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
  let ndx = 10 * sample.B07 - 9.8 * sample.B06 + 2;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
