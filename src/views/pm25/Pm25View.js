import React from "react"
import TheLineChart from "./TheLineChart.js"
import "./style.less"

class TemperatureView extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
  }
  render() {
    if(this.chart.current){
      this.chart.current.changeArea(this.props.currentArea)
    }
    return (
      <div className="pm25-view">
        <div className="head-bar">PM2.5 走 势 预 测 示 意 图</div>
        <TheLineChart ref={this.chart} data={this.props.data}></TheLineChart>
      </div>
    )
  }
}

export default TemperatureView