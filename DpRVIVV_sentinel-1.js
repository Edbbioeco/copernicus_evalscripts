//VERSION=3
//SPOT HRV XS-based Brightness Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B04",
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
  let ndx = (((sample.B03^2) + (sample.B04^2))/2)^0.5;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
