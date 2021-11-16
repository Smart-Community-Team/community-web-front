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
  title: {
    text: 'Nightingale Chart',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4'
    ]
  },
  series: [
    {
      name: 'Radius Mode',
      type: 'pie',
      radius: [20, 100],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 33, name: 'rose 2' },
        { value: 28, name: 'rose 3' },
        { value: 22, name: 'rose 4' },
        { value: 20, name: 'rose 5' },
        { value: 15, name: 'rose 6' }
      ]
    }
  ]
};


class TheNightingaleChart extends React.Component {
  constructor() {
    super()
    this.chartDom = React.createRef();
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
        <div className="the-chart" ref={this.chartDom}>
        </div>
        <TheRadio></TheRadio>
      </div>
    )
  }
}

export default TheNightingaleChart