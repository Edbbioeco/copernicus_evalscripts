//VERSION=3
//Burned Area Index adapted to MODIS

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
  let ndx = 1/((0.05 - sample.B08)^2) + ((0.2 - sample.B12)^2);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
