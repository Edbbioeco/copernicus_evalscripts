//VERSION=3
//Triangle Water Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B03",
          "B05",
          "B06",
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
  let ndx = (2.84 * (sample.B05 - sample.B06)/(sample.B03 + sample.B12)) + ((1.25 * (sample.B03 - sample.B02) - (sample.B08 - sample.B02))/(sample.B08 + 1.25 * sample.B03 - 0.25 * sample.B02));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
