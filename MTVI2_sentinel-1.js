//VERSION=3
//Cloud Shadow Index without SWIR bands

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B05",
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
  let ndx = sample.B05;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
