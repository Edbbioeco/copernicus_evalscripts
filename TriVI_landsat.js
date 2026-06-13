//VERSION=3
//Blue Near-Infrared Reflectance of Vegetation

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
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
  let ndx = ((sample.B08 - sample.B02)/(sample.B08 + sample.B02)) * sample.B08;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
