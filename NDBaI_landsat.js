//VERSION=3
//Sentinel-2 LAI Green Index

function setup() {
  return {
    input: [ // this sets which bands to use
      {
        bands: [
          "B05",
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
  let ndx = (sample.B8A - sample.B05)/(sample.B8A + sample.B05);
  return {
    default: [ndx],
    dataMask: [sample.dataMask]
  }
}
