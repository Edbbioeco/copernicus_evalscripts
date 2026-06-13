//VERSION=3
//Burned Area Index

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
  let ndx = 1/((0.1 - sample.B04)^2 + (0.06 - sample.B05)^2);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
