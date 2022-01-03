import React from "react";
import { areaData } from '@/api/index.js'
import { Radio } from 'antd';
import { setCircleInMap,initMap } from './mapFunction'
import { noiseTrace } from "@/api/index.js"
let bmapData = {}


class TheMap extends React.Component {
  constructor() {
    super()
    this.chartDom = React.createRef();
    this.map = null
    this.state = {
      currentArea: "阳光帝景"
    }
  }
  componentDidMount() {
    const { mapHandle } = initMap(this.chartDom.current,"阳光帝景",bmapData)
    this.map = mapHandle
    setTimeout(()=>{
      this.setState({
        currentArea: "阳光帝景"
      })
    },1000)
  }
  relocation= (event)=> {
    const value = event.target.value
    this.setState({
      currentArea: value
    })
    this.map.centerAndZoom(bmapData[value].point,15);
  }
  render() {
    const { currentArea } = this.state
    if(this.map)
      setCircleInMap(this.map,noiseTrace,bmapData)
    return (
      <div className="right-map">
        <div className="the-map" ref={this.chartDom}></div>
        <Radio.Group size="small" style={{ marginTop: 16 }} onChange={this.relocation} value={currentArea}>
          {areaData.map(item=>(
            <Radio.Button  value={item.areaName} key={item.id}>{item.areaName}</Radio.Button>
          ))}
        </Radio.Group>
      </div>
    )
  }
}
export default TheMap