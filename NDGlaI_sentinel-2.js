//VERSION=3
//Normalized Difference Impervious Surface Index with MNDWI

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
          "B05",
          "B06",
          "B10",
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
  let ndx = (sample.B10 - (((sample.B03 - sample.B06)/(sample.B03 + sample.B06)) + sample.B05 + sample.B06)/3)/(sample.B10 + (((sample.B03 - sample.B06)/(sample.B03 + sample.B06)) + sample.B05 + sample.B06)/3);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
