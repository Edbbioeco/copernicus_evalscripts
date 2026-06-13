//VERSION=3
//Visible Green-Based Built-Up Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B03",
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
  let ndx = (sample.B03 - sample.B08)/(sample.B03 + sample.B08);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
