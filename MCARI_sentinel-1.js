//VERSION=3
//Cloud Shadow Detection Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
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
  let ndx = (1 - 1.5 * sample.B05 - 0.1 * sample.B04)/(1 + 3.5 * sample.B05 + 4.9 * sample.B04);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
