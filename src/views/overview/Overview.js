import React from "react"
// import TheTemperatureGaugeChart from "../../component/TheTemperatureGaugeChart.js"
// import TheClock from "@/component/TheClock.js";
import SingleOverview from "./SingleOverview.js";
import './style.less'
import { current,currentTime,getCurrentTime } from '@/api/index.js'

class Overview extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
    this.state = {
      data: [],
      currentTime: null
    }
    this.init()
  }

  componentDidMount(){
    setInterval(()=>{
      getCurrentTime()
      this.setState({
        currentTime: currentTime
      })
    },1000)
  }

  init = ()=>{
    let onmessage = (e)=>{
      let data = JSON.parse(e.data)
      this.setState({
        data: data
      })
    }
    current.bindOnmessage(onmessage)
  }

  render() {
    const { data } = this.state
    const { currentTime } = this.state
    return (
      <div className="overview">
        <div className="head-bar">
          智慧社区数据监控平台 
          <div className="time-bar">{currentTime}</div>
        </div>
        <div className="data-monitor">
          <SingleOverview data={data[0]}></SingleOverview>
          <SingleOverview data={data[1]}></SingleOverview>
          <SingleOverview data={data[2]}></SingleOverview>
          <SingleOverview data={data[3]}></SingleOverview>
        </div>
      </div>
    )
  }
}

export default Overview