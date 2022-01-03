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
    this.predictIndex = 0
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
      const historyLine = {
        name: e.area,
        data: e.valueData.slice(this.startIndex,this.endIndex),
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              type: "solid"
            }
          }
        }
      }
      OPTION.series.push(historyLine) //绘制历史折线
      OPTION.legend.data.push(e.area) //标记该折线名称
      //绘制预测走势（目前数据只提供一个点，不过我觉得如果是走势线段就更妙了）
      const data = [...new Array(this.endIndex-this.startIndex),2]
      console.log(data)
      const predictLine = {
        name: e.area,
        data: [...new Array(this.endIndex-this.startIndex-1),e.valueData[this.endIndex-1],e.valueData[this.endIndex]],
        type: 'line',
        smooth: true,
        itemStyle: {
          normal: {
            lineStyle: {
              type: "dotted"
            }
          }
        }
      }
      OPTION.series.push(predictLine)
    }
    OPTION.xAxis.data = this.basicData[this.areaIndex].timeData.slice(this.startIndex,this.endIndex+1)
    OPTION && this.theChart.setOption(OPTION);
  }
  componentDidMount() {
    this.theChart = echarts.init(this.chartDom.current);
    this.changeDuration({target: {value:"last_week"}}) //模拟点击事件
  }
  render() {
    return (
      <div className="content">
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
