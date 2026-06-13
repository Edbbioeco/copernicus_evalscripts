//VERSION=3
//Sentinel-2 Red-Edge Position

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
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
  let ndx = 705 + 35 * ((((sample.B07 + sample.B04)/2) - sample.B05)/(sample.B06 - sample.B05));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
