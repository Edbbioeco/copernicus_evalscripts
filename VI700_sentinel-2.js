//VERSION=3
//Normalized Shortwave-Infrared Difference Bare Soil Moisture Index 3

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
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
  let ndx = (sample.B11 - sample.B12)/(sample.B11 + sample.B12);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
