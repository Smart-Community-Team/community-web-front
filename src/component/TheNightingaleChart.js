import React from "react";
import * as echarts from 'echarts';

let option = {
  title: {
    text: 'Nightingale Chart',
    subtext: '小区湿度',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [
    {
      name: '湿度',
      type: 'pie',
      radius: [10, 60],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 40, name: '小区a' },
        { value: 33, name: '小区b' },
        { value: 28, name: '小区c' },
        { value: 22, name: '小区d' }
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
        {/* <TheRadio></TheRadio> */}
      </div>
    )
  }
}

export default TheNightingaleChart