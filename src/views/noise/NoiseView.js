import React from "react"
import TheLineChart from "./TheLineChart.js"
import TheMap from "./TheMap.js"
import './style.less'

class NoiseView extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
  }
  render() {
    if(this.chart.current){
      this.chart.current.changeArea(this.props.currentArea)
    }
    return (
      <div className="noise-view">
        <div className="head-bar">噪 音 分 布 展 示 图</div>
        <div className="content">
          <TheLineChart ref={this.chart} data={this.props.data}></TheLineChart>
          <TheMap></TheMap>
        </div>
      </div>
    )
  }
}

export default NoiseView