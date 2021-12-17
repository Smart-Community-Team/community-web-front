import React from "react"
import { FullscreenExitOutlined } from '@ant-design/icons'
import './style.less'

const showingList = [
  ["温度", "temperature", "°C"],
  ["湿度", "humidity", "%RH"],
  ["风向", "windDirection","°"],
  ["风力", "windPower", "级"],
  ["PM2.5浓度", "pm25", "ug/m³"],
  ["噪音", "noise", "db"],
  ["气压", "airPressure", "hPa"]
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
        {
          list.map((item,index)=>{
            return (
              <div className="card" key={index}>{item[0]}
                <div className="number">{data[item[1]]}</div>
                <div>{item[2]}</div>
              </div>
            )
          })
        }
      </>
    )
  }

  render() {
    const { fullScreen } = this.state
    const content = this.getContent()
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