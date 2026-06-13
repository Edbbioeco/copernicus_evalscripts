//VERSION=3
//Kochia Detection Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B05",
          "B07",
          "B08",
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
  let ndx = ((sample.B08 + sample.B11 - sample.B07)/(sample.B08 + sample.B11 + sample.B07)) * ((sample.B05 - 2 * sample.B07 + sample.B08)/(sample.B05 + 2 * sample.B07 + sample.B08));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
