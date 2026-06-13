//VERSION=3
//Built-Up Land Features Extraction Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
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
  let ndx = (((sample.B03 + sample.B04 + sample.B12)/3) - sample.B11)/(((sample.B03 + sample.B04 + sample.B12)/3) + sample.B11);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
