//VERSION=3
//Global Vegetation Moisture Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B08",
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
  let ndx = ((sample.B08 + 0.1) - (sample.B12 + 0.02))/((sample.B08 + 0.1) + (sample.B12 + 0.02));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
