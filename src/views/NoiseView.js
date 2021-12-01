import React from "react"
import TheLineChart from "../component/TheLineChart.js"

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
      <>
        <TheLineChart ref={this.chart} data={this.props.data}></TheLineChart>
      </>
    )
  }
}

export default NoiseView