import React from "react"
// import TheTemperatureGaugeChart from "../../component/TheTemperatureGaugeChart.js"
// import TheClock from "@/component/TheClock.js";
import SingleOverview from "./SingleOverview.js";
import './style.less'

class Overview extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
  }
  render() {
    return (
      <div className="overview">
        {/* <TheClock></TheClock>
        <TheTemperatureGaugeChart ref={this.chart} data={this.props.data}></TheTemperatureGaugeChart> */}
        <SingleOverview></SingleOverview>
        <SingleOverview></SingleOverview>
        <SingleOverview></SingleOverview>
        <SingleOverview></SingleOverview>
      </div>
    )
  }
}

export default Overview