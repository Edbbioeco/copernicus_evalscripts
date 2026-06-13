//VERSION=3
//VV-VH Sum

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "VH",
          "VV",
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
  let ndx = sample.VV + sample.VH;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
