import React from "react"
import TheMap from "./TheMap.js"
import TheSlider from "../../component/TheSlider.js"
import {windDirectionData} from "../../api/index.js"


function getCurrentDirection(currentHour) {
  const currentDirection = {}
  for(let e of windDirectionData){
    const item = e.hours.find((item)=>{
      return item.hour === currentHour
    })
    currentDirection[e.area] = item
  }
  return currentDirection
}

class WindView extends React.Component {
  state = {
    currentDirection: null,
  }

  handleChange = (value)=>{
    this.setState({
      currentDirection: getCurrentDirection(value),
    })
  }
  componentDidMount(){
    this.handleChange(15)
  }
  render() {
    const {currentDirection} = this.state
    const defaultHour = 15
    return (
      <>
        <TheMap currentDirection={currentDirection}></TheMap>
        <TheSlider defaultValue={defaultHour} handleChange={this.handleChange}></TheSlider>
      </>
    )
  }
}

export default WindView