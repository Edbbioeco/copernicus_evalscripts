//VERSION=3
//Improved-Red-Green-Blue Vegetation Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B02",
          "B03",
          "B04",
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
  let ndx = (5 * (sample.B03^2) - 2 * (sample.B04^2) - 5 * (sample.B02^2))/(5 * (sample.B03^2) + 2 * (sample.B04^2) + 5 * (sample.B02^2));
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
