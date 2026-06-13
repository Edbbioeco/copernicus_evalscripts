//VERSION=3
//Burned Area Index for Sentinel 2

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
          "B06",
          "B07",
          "B12",
          "B8A",
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
  let ndx = (1 - ((sample.B06 * sample.B07 * sample.B8A)/sample.B04)^0.5) * (((sample.B12 - sample.B8A)/(sample.B12 + sample.B8A)^0.5) + 1);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
