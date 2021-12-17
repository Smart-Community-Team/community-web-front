
let windDirectionData = [
  {
    area: "阳光帝景",
    type: "windDirection",
    hours: [
      { 
        date: "2021-1-12",
        hour: 1,
        value: 20
      },{ 
        date: "2021-1-12",
        hour: 2,
        value: 30
      },{
        date: "2021-1-12",
        hour: 4,
        value: 40
      },{
        date: "2021-1-12",
        hour: 5,
        value: 50
      },{ 
        date: "2021-1-12",
        hour: 14,
        value: 20
      },{
        date: "2021-1-12",
        hour: 15,
        value: 90
      },{
        date: "2021-1-12",
        hour: 16,
        value: 180
      }
    ],
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [320,330,330,330,330,320,300,200,200,200,200,200,200,200,180,180,180,null,null,150,160,180,150,150]
  },{
    area: "江北顶山街道",
    type: "windDirection",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,22,23,24,22,21,18,19,15,15,21,24,25,24,22,21,10,10,5,5,2,15,13,23],
    hours: [
      { 
        date: "2021-1-12",
        hour: 14,
        value: 0
      },{
        date: "2021-1-12",
        hour: 15,
        value: 80
      },{
        date: "2021-1-12",
        hour: 16,
        value: 180
      }
    ],
  },{
    area: "大新华府南区",
    type: "windDirection",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [15,20,22,24,22,21,17,15,14,14,21,22,23,24,22,21,18,19,15,15,8,2,9,1],
    hours: [
      { 
        date: "2021-1-12",
        hour: 14,
        value: 0
      },{
        date: "2021-1-12",
        hour: 15,
        value: 90
      },{
        date: "2021-1-12",
        hour: 16,
        value: 100
      }
    ],
  },{
    area: "大新华府北区",
    type: "windDirection",
    timeData: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    valueData: [21,24,25,24,22,21,10,10,5,5,21,24,25,24,22,21,18,19,15,15,10,2,3,1],
    hours: [
      { 
        date: "2021-1-12",
        hour: 14,
        value: 0
      },{
        date: "2021-1-12",
        hour: 15,
        value: 40
      },{
        date: "2021-1-12",
        hour: 16,
        value: 270
      }
    ]
  }
]

//fetch("http://120.55.86.4:8085/showdata").then().then()

let startTime = new Date('2021-02-01T09:59:33.000+00:00')
console.log(startTime)

fetch("/showdata?type=windDirection&areas=江北顶山街道,大新华府南区,大新华府北区,阳光帝景")
.then(res=>res.json())
.then(res=>{
  console.log("风向数据已获取",res.data)
  for(const e of res.data) {
    windDirectionData.find((item)=>{
      return item.area === e.area
    }).hours = e.detailDatas
  }
  // console.log(res.data[1].detailDatas[0].date)
  // let date = new Date(res.data[1].detailDatas[0].date)
  // console.log(date)
})
export {windDirectionData}