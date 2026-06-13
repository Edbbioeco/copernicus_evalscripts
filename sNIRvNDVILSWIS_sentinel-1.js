//VERSION=3
//Modified Chlorophyll Absorption in Reflectance Index 2

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
          "B08",
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
  let ndx = (1.5 * (2.5 * (sample.B08 - sample.B04) - 1.3 * (sample.B08 - sample.B03)))/((((2 * sample.B08 + 1)^2) - (6 * sample.B08 - 5 * (sample.B04^0.5)) - 0.5)^0.5);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
