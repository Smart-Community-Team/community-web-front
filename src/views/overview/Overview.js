import React from "react"
// import TheTemperatureGaugeChart from "../../component/TheTemperatureGaugeChart.js"
// import TheClock from "@/component/TheClock.js";
import SingleOverview from "./SingleOverview.js";
import './style.less'
import { current } from '@/api/index.js'

class Overview extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
    this.state = {
      data: []
    }
    this.init()
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
    return (
      <div className="overview">
        {/* <TheClock></TheClock>
        <TheTemperatureGaugeChart ref={this.chart} data={this.props.data}></TheTemperatureGaugeChart> */}
        <SingleOverview data={data[0]}></SingleOverview>
        <SingleOverview data={data[1]}></SingleOverview>
        <SingleOverview data={data[2]}></SingleOverview>
        <SingleOverview data={data[3]}></SingleOverview>
        <div>2021/12/2 19:58:02</div>
      </div>
    )
  }
}

export default Overview