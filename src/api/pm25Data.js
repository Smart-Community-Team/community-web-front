export const pm25Data = {
  "阳光帝景": {
    history: [26, 39, 48, 52, 47, 50, 51, 49,   46, 49, 48, 52, 47, 50, 51],
    predict: null
  },
  "大新华府南区": {
    history: [26, 38, 40, 39, 42, 37, 43, 42,   36, 48, 40, 39, 42, 37, 43],
    predict: null
  },
  "大新华府北区": {
    history: [27, 31, 40, 37, 44, 35, 36, 42,   37, 41, 40, 38, 44, 35, 38],
    predict: null
  },
  "江北顶山街道": {
    history: [27, 28, 32, 28, 45, 41, 44, 43,   47, 49, 53, 49, 55, 51, 52],
    predict: null
  }
}

getPredict("阳光帝景")
getPredict("大新华府南区")
getPredict("大新华府北区")
getPredict("江北顶山街道")


function getPredict(area) {
  fetch(`http://120.55.86.4:8085/predictpm25?area=${area}`)
  .then(res=>res.json())
  .then(res=>{
    pm25Data[area].predict = res.data
  })
}