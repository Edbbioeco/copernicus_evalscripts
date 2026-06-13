//VERSION=3
//Global Environment Monitoring Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
          "B08",
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
  let ndx = ((2 * ((sample.B08^2) - (sample.B04^2)) + 1.5 * sample.B08 + 0.5 * sample.B04)/(sample.B08 + sample.B04 + 0.5)) * (1 - 0.25 * ((2 * ((sample.B08^2) - (sample.B04^2)) + 1.5 * sample.B08 + 0.5 * sample.B04)/(sample.B08 + sample.B04 + 0.5))) - ((sample.B04 - 0.125)/(1 - sample.B04));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
