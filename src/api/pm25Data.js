export const pm25Data = {
  "阳光帝景": {
    history: [null,null,null,null,null,null,null,   46, 49, 48, 52, 47, 50, 51],
    predict: null
  },
  "大新华府南区": {
    history: [null,null,null,null,null,null,null,   36, 48, 40, 39, 42, 37, 43],
    predict: null
  },
  "大新华府北区": {
    history: [null,null,null,null,null,null,null,   37, 41, 40, 38, 44, 35, 38],
    predict: null
  },
  "江北顶山街道": {
    history: [null,null,null,null,null,null,null,   47, 49, 53, 49, 55, 51, 52],
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