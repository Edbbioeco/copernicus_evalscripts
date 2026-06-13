//VERSION=3
//MCARI/OSAVI Ratio

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
          "B05",
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
  let ndx = (((sample.B05 - sample.B04) - 0.2 * (sample.B05 - sample.B03)) * (sample.B05/sample.B04))/(1.16 * (sample.B08 - sample.B04)/(sample.B08 + sample.B04 + 0.16));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
