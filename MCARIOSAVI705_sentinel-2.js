//VERSION=3
//Non-Binary Snow Index for Multi-Component Surfaces

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B03",
          "B04",
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
  let ndx = 0.36 * (sample.B03 + sample.B04 + sample.B08) - (((sample.B02 + sample.B12)/sample.B03) + sample.B11);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
