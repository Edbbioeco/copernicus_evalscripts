//VERSION=3
//Modified Chlorophyll Absorption in Reflectance Index (705 and 750 nm)

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B05",
          "B06",
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
  let ndx = ((sample.B06 - sample.B05) - 0.2 * (sample.B06 - sample.B03)) * (sample.B06/sample.B05);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
