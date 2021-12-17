import React from "react"
import { Tabs } from 'antd'
import TheNightingaleChart from "../component/TheNightingaleChart.js"
import WindView from "../views/wind/WindView.js" 
import TemperatureView from '../views/TemperatureView.js';
import Overview from "../views/overview/Overview.js";
import NoiseView from "../views/NoiseView.js";
import TheSelect from "../component/TheSelect.js"
import {temperatureDataNew,noiseData} from "@/api/index.js"
import './style.less'
const { TabPane } = Tabs;

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      currentArea: "阳光帝景"
    }
  }

  changeArea = (area)=>{
    console.log("全局选择",area)
    this.setState({
      currentArea: area
    })
  }

  render() {
    const {currentArea} = this.state
    return (
      <div className="layout">
        <Tabs tabPosition="left" className="layout-tabs">
          <TabPane tab="此刻 · 概览" key="1">
            <Overview></Overview>
          </TabPane>
          <TabPane tab="噪音" key="2">
            <NoiseView data={noiseData} currentArea={currentArea}></NoiseView>
          </TabPane>
          <TabPane tab="风向/风力" key="3">
            <WindView currentArea={currentArea} ></WindView>
          </TabPane>
          <TabPane tab="温度" key="4">
            <TemperatureView data={temperatureDataNew} currentArea={currentArea}></TemperatureView>
          </TabPane>
          <TabPane tab="湿度" key="5">
            Content of Tab 3
            <TheNightingaleChart></TheNightingaleChart>
          </TabPane>
          <TabPane tab="。。。" key="6">
            Content of Tab 3
            <TheNightingaleChart></TheNightingaleChart>
          </TabPane>
        </Tabs>
        <div className="global-the-select">
          <TheSelect defaultValue="阳光帝景" handleChange={this.changeArea}></TheSelect>
        </div>
      </div>
    )
  }
}

export default Layout