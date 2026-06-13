//VERSION=3
//Normalized Difference Drought Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = (((sample.B05 - sample.B04)/(sample.B05 + sample.B04)) - ((sample.B03 - sample.B05)/(sample.B03 + sample.B05)))/(((sample.B05 - sample.B04)/(sample.B05 + sample.B04)) + ((sample.B03 - sample.B05)/(sample.B03 + sample.B05)));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
