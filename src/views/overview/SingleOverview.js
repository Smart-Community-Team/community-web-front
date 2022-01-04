import React from "react"
import { FullscreenExitOutlined } from '@ant-design/icons'
import './style.less'
import icon_temperature from '@/assets/icon_temperature.svg'
import icon_windPower from '@/assets/icon_windPower.svg'
import icon_windDirection from '@/assets/icon_windDirection.svg'
import icon_humidity from '@/assets/icon_humidity.svg'
import icon_pm25 from '@/assets/icon_pm25.svg'
import icon_pm10 from '@/assets/icon_pm10.svg'
import icon_noise from '@/assets/icon_noise.svg'
import icon_airPressure from '@/assets/icon_airPressure.svg'

const showingList = [
  {
    icon: icon_temperature,
    title: "温度",
    titleEn: "temperature",
    unit: "°C"    
  },{
    icon: icon_humidity,
    title: "湿度",
    titleEn: "humidity",
    unit: "%RH"    
  },{
    icon: icon_windDirection,
    title: "风向",
    titleEn: "windDirection",
    unit: "°"    
  },{
    icon: icon_windPower,
    title: "风力",
    titleEn: "windPower",
    unit: "级"    
  },{
    icon: icon_pm25,
    title: "PM2.5",
    titleEn: "pm25",
    unit: "ug/m³"    
  },{
    icon: icon_pm10,
    title: "PM10",
    titleEn: "pm10",
    unit: "ug/m³"    
  },{
    icon: icon_noise,
    title: "噪音",
    titleEn: "noise",
    unit: "db"    
  },{
    icon: icon_airPressure,
    title: "气压",
    titleEn: "airPressure",
    unit: "hPa"    
  }
]

class SingleOverview extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
    this.state = {
      fullScreen: false
    }
  }

  fullScreen = (isFull)=>{
    console.log(isFull)
    this.setState({
      fullScreen: isFull
    })
  }

  getContent = ()=>{
    const data = dataParse(this.props.data)
    const list = showingList
    return (
      <>
        <div className="title-panel">{data.areaName}</div>
        <div className="data-panel">
          {
            list.map((item,index)=>{
              return (
                <div className="card" key={index}>
                  <div className="icon"><img src={item.icon} /></div>
                  <div className="title">{item.title}</div>
                  <div className="number">{data[item.titleEn]} {item.unit}</div>
                </div>
              )
            })
          }
        </div>
      </>
    )
  }

  render() {
    const { fullScreen } = this.state
    const content = this.getContent()
    const data = dataParse(this.props.data)
    return (
      <>
        <div className="single-overview" onClick={()=>this.fullScreen(true)}>
          {content}
        </div>
        <div className={`${fullScreen?"single-overview-full-screen":"unshow"} single-overview`}>
          {content}
          <FullscreenExitOutlined className={fullScreen?"show":"unshow"} onClick={()=>this.fullScreen(false)}  />
        </div>
      </>
    )
  }
}

export default SingleOverview

function dataParse (originData) {
  let newData = {
    areaName: null,
    pm25: null
  }
  if( originData ) {
    for( const i in originData ) {
      newData.areaName = i
    }
    for( const i in originData[newData.areaName] ) {
      newData[i] = originData[newData.areaName][i]
    }
  }
  return newData
}