//VERSION=3
//Built-Up Land Features Extraction Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
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
  let ndx = (((sample.B03 + sample.B04 + sample.B07)/3) - sample.B06)/(((sample.B03 + sample.B04 + sample.B07)/3) + sample.B06);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
