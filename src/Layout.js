import { Tabs } from 'antd';
import TheLineChart from "./component/TheLineChart.js"
import TheNightingaleChart from "./component/TheNightingaleChart.js"
import TheRadio from './component/TheRadio.js'
const { TabPane } = Tabs;

function Layout() {
  return (
    <div>
      <Tabs tabPosition="left">
        <TabPane tab="噪音" key="1" className="containers">
          <TheLineChart></TheLineChart>
          <TheLineChart></TheLineChart>
        </TabPane>
        <TabPane tab="风向" key="2">
          Content of Tab 2
          <TheRadio></TheRadio>
        </TabPane>
        <TabPane tab="温度" key="3">
          Content of Tab 3
        </TabPane>
        <TabPane tab="湿度" key="4">
          Content of Tab 3
          <TheNightingaleChart></TheNightingaleChart>
        </TabPane>
        <TabPane tab="风力" key="5">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Layout