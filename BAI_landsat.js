//VERSION=3
//Radar Forest Degradation Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "HH",
          "HV",
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
  let ndx = (sample.HH - sample.HV)/(sample.HH + sample.HV);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
