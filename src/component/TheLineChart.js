import React from "react";
import * as echarts from 'echarts';
import TheRadio from './TheRadio.js'

let OPTION = {
  xAxis: {
    type: 'category',
    name: "时间",
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [],
      type: 'line',
      smooth: true
    }
  ]
};

class TheLineChart extends React.Component {
  constructor(props) {
    super(props)
    this.chartDom = React.createRef();
    this.durationKey = "last_week"
    this.basicData = this.props.data
    this.startIndex = 0
    this.endIndex = 0
    this.areaIndex = 0
  }
  changeArea = (area)=>{
    for(let i in this.basicData){
      if( this.basicData[i].area===area){
        this.areaIndex = i
        console.log("area change")
      }
    }
    this.paintChart()
  }
  changeDuration = (key) => {
    this.endIndex = this.basicData[0].timeData.length-1
    if(key==="last_week"){
      this.startIndex = this.endIndex-7
    }
    else if(key==="last_month"){
      this.startIndex = this.endIndex-14
    }
    else {
      return;
    }
    OPTION.xAxis.data = this.basicData[0].timeData.slice(this.startIndex,this.endIndex)
    this.paintChart()
  }
  paintChart = ()=>{
    OPTION.xAxis.data = this.basicData[this.areaIndex].timeData.slice(this.startIndex,this.endIndex)
    OPTION.series[0].data = this.basicData[this.areaIndex].valueData.slice(this.startIndex,this.endIndex)
    console.log("now option is",OPTION)
    OPTION && this.theChart.setOption(OPTION);
  }
  componentDidMount() {
    this.theChart = echarts.init(this.chartDom.current);
    this.changeDuration("last_week")
    this.changeArea("阳光帝景")
    this.paintChart() 
  }
  render() {
    return (
      <div className="the-chart-container">
        <div className="the-chart" id="chart1" ref={this.chartDom}>
        </div>
        <TheRadio onChangeOption={this.changeDuration}></TheRadio>
      </div>
    )
  }
}

export default TheLineChart
