import React from "react";
import { Radio } from 'antd';
import * as echarts from 'echarts';
import { OPTION } from './theLineChartOption'
import { noiseData } from "@/api/index.js"

class TheLineChart extends React.Component {
  constructor(props) {
    super(props)
    this.chartDom = React.createRef();
    this.durationKey = "last_week"
    this.basicData = noiseData
    this.startIndex = 0
    this.endIndex = 0
    this.areaIndex = 0
  }
  changeDuration = (event) => {
    const value = event.target.value
    this.endIndex = this.basicData[0].timeData.length-1
    if(value==="last_week"){
      this.startIndex = this.endIndex-7
    }
    else if(value==="last_month"){
      this.startIndex = this.endIndex-14
    }
    else {
      return;
    }
    OPTION.xAxis.data = this.basicData[0].timeData.slice(this.startIndex,this.endIndex)
    this.paintChart()
  }
  paintChart = ()=>{
    OPTION.series = []
    OPTION.legend.data = []
    for(const e of this.basicData) {
      const oneLine = {
        name: e.area,
        data: e.valueData.slice(this.startIndex,this.endIndex),
        type: 'line',
        smooth: true,
      }
      OPTION.series.push(oneLine)
      OPTION.legend.data.push(e.area)
    }
    OPTION.xAxis.data = this.basicData[this.areaIndex].timeData.slice(this.startIndex,this.endIndex)
    OPTION && this.theChart.setOption(OPTION);
  }
  componentDidMount() {
    this.theChart = echarts.init(this.chartDom.current);
    this.changeDuration({target: {value:"last_week"}}) //模拟点击事件
  }
  render() {
    return (
      <div className="left-line-chart">
        <div className="the-line-chart" ref={this.chartDom}></div>
        <Radio.Group defaultValue="last_week" buttonStyle="solid" onChange={this.changeDuration}>
          <Radio.Button value="last_week">近1周</Radio.Button>
          <Radio.Button value="last_month">近1月</Radio.Button>
          <Radio.Button value="c">近6月</Radio.Button>
          <Radio.Button value="d">近1年</Radio.Button>
        </Radio.Group>
      </div>
    )
  }
}

export default TheLineChart
