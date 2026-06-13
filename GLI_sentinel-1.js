//VERSION=3
//Cloud Index Form 1 with SWIR 1

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
  let ndx = (sample.B08 + 2 * sample.B11)/(sample.B02 + sample.B03 + sample.B04);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
