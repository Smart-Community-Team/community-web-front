
let temperatureData = [
  {
    area: "阳光帝景",
    type: "temperature",
    data: [
      { 
        date: "2021-1-12",
        hour: 14,
        value: 23
      },{
        date: "2021-1-12",
        hour: 15,
        value: 22
      },{
        date: "2021-1-12",
        hour: 16,
        value: 22
      },{ 
        date: "2021-1-12",
        hour: 17,
        value: 15
      },{
        date: "2021-1-12",
        hour: 18,
        value: 14
      },{
        date: "2021-1-12",
        hour: 19,
        value: 13
      }
    ]
  },{
    area: "江北顶山街道",
    type: "temperature",
    data: [
      { 
        date: "2021-1-12",  
        hour: 14,
        value: 23
      },{
        date: "2021-1-12",
        hour: 15,
        value: 22
      },{
        date: "2021-1-12",
        hour: 16,
        value: 22
      },{ 
        date: "2021-1-12",  
        hour: 17,
        value: 23
      },{
        date: "2021-1-12",
        hour: 18,
        value: 22
      },{
        date: "2021-1-12",
        hour: 19,
        value: 17
      },{ 
        date: "2021-1-12",  
        hour: 20,
        value: 16
      },{
        date: "2021-1-12",
        hour: 21,
        value: 15
      },
    ]
  }
]

fetch("/showdata?type=temperature&areas=阳光帝景&startTime=2021-1-12%200:0:0&endTime=2021-1-13%2023:59:59&timeGap=hour").then(res=>res.json()).then(data=>console.log(data))

let temperatureDataNew = [
  {
    area: "阳光帝景",
    type: "temperature",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,24,25,null,null,21,18,19,15,15,15,20,22,24,22,21,17,null,null,14,10,3,2,1]
  },{
    area: "江北顶山街道",
    type: "temperature",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,22,23,24,22,21,18,19,15,15,21,24,25,24,22,21,10,10,5,5,2,15,13,23]
  },{
    area: "大新华府南区",
    type: "temperature",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [15,20,22,24,22,21,17,15,14,14,21,22,23,24,22,21,18,19,15,15,8,2,9,1]
  },{
    area: "大新华府北区",
    type: "temperature",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,24,25,24,22,21,10,10,5,5,21,24,25,24,22,21,18,19,15,15,10,2,3,1]
  }
]

let noiseData = [
  {
    area: "阳光帝景",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,24,25,24,22,21,18,19,15,15,15,20,22,24,22,21,17,15,14,14,10,3,2,1]
  },{
    area: "江北顶山街道",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,22,23,24,22,21,18,19,15,15,21,24,25,24,22,21,10,10,5,5,2,15,13,23]
  },{
    area: "大新华府南区",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [15,20,22,24,22,21,17,15,14,14,21,22,23,24,22,21,18,19,15,15,8,2,9,1]
  },{
    area: "大新华府北区",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,24,25,24,22,21,10,10,5,5,21,24,25,24,22,21,18,19,15,15,10,2,3,1]
  }
]

let areaData = [
  {
    areaName: "阳光帝景",
    id: 1,
    locationInMap: [118.689352,32.109883]
  },{
    areaName: "江北顶山街道",
    id: 2,
    locationInMap: [118.692746,32.108856]
  },{
    areaName: "大新华府南区",
    id: 3,
    locationInMap: [118.711908,32.100371]
  },{
    areaName: "大新华府北区",
    id: 4,
    locationInMap: [118.70968,32.102415]
  }
]


export {temperatureData,temperatureDataNew,noiseData,areaData}