import React from "react"
import { Tabs } from 'antd'
import WindView from "../views/wind/WindView.js" 
import Pm25View from '../views/pm25/Pm25View.js'
import Overview from "../views/overview/Overview.js";
import NoiseView from "../views/noise/NoiseView.js";
import './style.less'
const { TabPane } = Tabs;

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      currentArea: "阳光帝景"
    }
  }

  render() {
    const {currentArea} = this.state
    return (
      <div className="layout">
        <Tabs tabPosition="left" className="layout-tabs">
          <TabPane tab="此刻 · 概览" key="1">
            <Overview></Overview>
          </TabPane>
          <TabPane tab="风向/风力" key="2">
            <WindView></WindView>
          </TabPane>
          <TabPane tab="噪音" key="3">
            <NoiseView></NoiseView>
          </TabPane>
          <TabPane tab="PM2.5" key="4">
            <Pm25View></Pm25View>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Layout