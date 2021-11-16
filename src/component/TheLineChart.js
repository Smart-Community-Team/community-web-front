import React from "react";
import * as echarts from 'echarts';
import TheRadio from './TheRadio.js'

let data_week = {
  date: ['11-01', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07'],
  data: [820, 932, 901, 934, 1290, 1330, 1320]
}
let data_month = {
  date: [
    '10-17', '10-18', '10-19', '10-20', '10-21', '10-22', '10-23', 
    '10-25', '10-26', '10-27', '10-28', '10-29', '10-30', '10-31',
    '11-01', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07',
    '11-08', '11-09', '11-10', '11-11', '11-12', '11-13', '11-14'
  ],
  data: [820, 932, 901, 934, 1290, 130, 1320,820, 932, 901, 934, 190, 1330, 1320,820, 932, 901, 934, 12, 13, 132,820, 932, 901, 934, 1290, 1330, 1320]
}

let option = {
  xAxis: {
    type: 'category',
    data: data_week.date
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: data_week.data,
      type: 'line',
      smooth: true
    }
  ]
};

class TheLineChart extends React.Component {
  constructor() {
    super()
    this.chartDom = React.createRef();
  }
  changeOption = (key) => {
    if(key==="last_week"){
      option.xAxis.data = data_week.date
      option.series[0].data = data_week.data
      this.paintChart()
    }
    else if(key==="last_month"){
      option.xAxis.data = data_month.date
      option.series[0].data = data_month.data
      this.paintChart()
    }
    else {
      return;
    }
  }
  paintChart = ()=>{
    option && this.theChart.setOption(option);
  }
  componentDidMount() {
    this.theChart = echarts.init(this.chartDom.current);
    this.paintChart()
  }
  render() {
    return (
      <div className="the-chart-container">
        <div className="the-chart" id="chart1" ref={this.chartDom}>
        </div>
        <TheRadio onChangeOption={this.changeOption}></TheRadio>
      </div>
    )
  }
}

export default TheLineChart