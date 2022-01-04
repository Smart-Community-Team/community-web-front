import React from "react";
import { Radio } from 'antd';
import * as echarts from 'echarts';
import { OPTION } from './theLineChartOption'
import { pm25Data,areaData } from '@/api/index.js'

const dateList = ["12-2", "12-3", "12-4", "12-5", "12-6", "12-7", "12-8", "12-9", "12-10", "12-11", "12-12", "12-13", "12-14", "12-15", "12-16", "12-17", "12-18", "12-19", "12-20", "12-21"]

class TheLineChart extends React.Component {
  constructor(props) {
    super(props)
    this.chartDom = React.createRef();
    this.dataRange = 0
  }
  changeDuration = (event) => {
    const value = event.target.value
    if(value==="7day"){
      this.dataRange = 7
    }
    else if(value==="14day"){
      this.dataRange = 14
    }
    else {
      return;
    }
    OPTION.xAxis.data = [...dateList.slice(-this.dataRange), "预测次日"]
    this.paintChart()
  }
  paintChart = ()=>{
    OPTION.series = []
    OPTION.legend.data = []
    for (const area of areaData) {
      const areaName = area.areaName
      const historyData = pm25Data[areaName].history.slice(-this.dataRange)
      const predictData = pm25Data[areaName].predict
      console.log(predictData)
      const historyLine = {
        name: areaName,
        data: historyData,
        type: 'line',
        smooth: true,
        lineStyle: {
          type: "solid"
        }
      }
      //绘制预测走势（目前数据只提供一个点，不过我觉得如果是走势线段就更妙了）
      const predictLine = {
        name: areaName,
        data: [...new Array(this.dataRange-1),historyData[historyData.length-1],predictData],
        type: 'line',
        smooth: true,
        lineStyle: {
          type: "dotted"
        }
      }
      OPTION.series.push(historyLine) //绘制历史折线
      OPTION.series.push(predictLine) 
      OPTION.legend.data.push(areaName) //标记该折线名称
    }
    OPTION && this.theChart.setOption(OPTION);
  }
  componentDidMount() {
    this.theChart = echarts.init(this.chartDom.current);
    this.changeDuration({target: {value:"7day"}}) //模拟点击事件
  }
  render() {
    return (
      <div className="content">
        <div className="the-line-chart" ref={this.chartDom}></div>
        <Radio.Group defaultValue="7day" buttonStyle="solid" onChange={this.changeDuration}>
          <Radio.Button value="7day">近7天</Radio.Button>
          <Radio.Button value="14day">近14天</Radio.Button>
          {/* <Radio.Button value="c">近6月</Radio.Button>
          <Radio.Button value="d">近1年</Radio.Button> */}
        </Radio.Group>
      </div>
    )
  }
}

export default TheLineChart
