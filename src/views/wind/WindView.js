import React from "react"
import { Slider } from 'antd';
import { areaData } from '@/api/index.js'
import { Radio } from 'antd';
import { getCurrentDirection } from './getCurrentDirection'
import { setDirectionInMap,initMap } from './mapFunction'
import './style.less';

let bmapData = {}

class WindView extends React.Component {
  constructor() {
    super()
    this.chartDom = React.createRef();
    this.map = null
    this.state = {
      currentTime: 2
    }
  }
  componentDidMount() {
    const { mapHandle } = initMap(this.chartDom.current,"阳光帝景",bmapData)
    this.map = mapHandle
    setInterval(() => {
      this.setState({
        currentTime: this.state.currentTime%24 + 1
      })
    }, 1000);
  }
  relocation= (event)=> {
    const value = event.target.value
    this.map.centerAndZoom(bmapData[value].point,18);
  }
  changeSlider = (value) => {
    this.setState({
      currentTime: value
    })
  }
  renderData = (areaName,currentPower,currentDirection)=>{
    console.log(currentPower[areaName])
    if(currentPower[areaName])
      return (
        <div className="single-card">
          <div className="area-name">{areaName}</div> 
          <div className="data-content">
            风力：{currentPower[areaName].value.toFixed(0)}  &nbsp;
            风向：{currentDirection[areaName].value.toFixed(0)}°
          </div>
        </div>
      )
    else {
      return (
        <div className="single-card">
          <div className="area-name">{areaName}</div> 
          <div className="data-content">暂无数据</div>
        </div>
      )
    }
  }
  render() {
    const { currentTime } = this.state
    const { currentDirection,currentPower } = getCurrentDirection(currentTime)
    console.log(currentPower)
    if(this.map)
      setDirectionInMap(this.map,currentDirection,currentPower,bmapData)
    return (
      <div className="wind-view">
        <div className="head-bar">风 力 风 向 展 示 台</div>
        <div className="wind-map" ref={this.chartDom}></div>
        <Radio.Group size="small" style={{ marginTop: 16 }}  defaultValue="阳光帝景" onChange={this.relocation}>
          {areaData.map(item=>(
            <Radio.Button  value={item.areaName} key={item.id}>{item.areaName}</Radio.Button>
          ))}
        </Radio.Group>
        <Slider
          min={1} max={24} value={currentTime}
          onChange={this.changeSlider}
        />
        <div>{currentTime}时</div>
        <div className="current-data">
          {this.renderData("江北顶山街道",currentPower,currentDirection)}<br/>
          {this.renderData("阳光帝景",currentPower,currentDirection)}
          {this.renderData("大新华府南区",currentPower,currentDirection)}<br/>
          {this.renderData("大新华府北区",currentPower,currentDirection)}
        </div>
      </div>
    )
  }
}

export default WindView