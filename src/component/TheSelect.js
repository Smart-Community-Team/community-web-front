import { Select } from 'antd';
import React from "react";
import {areaData} from "../api/index.js"
const { Option } = Select;

class TheSelect extends React.Component {

  handleChange=(value)=>{
    if(this.props.handleChange){
      this.props.handleChange(value)
    }
    else {
      console.log("未传入handleChange方法")
    }
  }
  render() {
    const {defaultValue} = this.props
    return (
      <Select defaultValue={defaultValue} style={{ width: 120 }} onChange={this.handleChange}>
        {areaData.map(item=>(
          <Option value={item.areaName} key={item.id}>{item.areaName}</Option>
        ))}
      </Select>
    )
  }
}

export default TheSelect