//VERSION=3
//Dry Built-Up Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B04",
          "B05",
          "B11",
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
  let ndx = ((sample.B02 - sample.B11)/(sample.B02 + sample.B11)) - ((sample.B05 - sample.B04)/(sample.B05 + sample.B04));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
