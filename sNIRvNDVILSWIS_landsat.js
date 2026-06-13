//VERSION=3
//SWIR-enhanced Near-Infrared Reflectance of Vegetation

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B04",
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
  let ndx = ((sample.B08 - sample.B04 - sample.B12^2)/(sample.B08 + sample.B04 + sample.B12^2)) * sample.B08;
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
