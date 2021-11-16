import { Radio } from 'antd';
import React from "react";

class TheRadio extends React.Component {
  onChangeOption = (event)=>{
    this.props.onChangeOption(event.target.value)
  }
  render() {
    return (
      <div>
        <Radio.Group defaultValue="last_week" buttonStyle="solid" onChange={this.onChangeOption}>
          <Radio.Button value="last_week">近1周</Radio.Button>
          <Radio.Button value="last_month">近1月</Radio.Button>
          <Radio.Button value="c">近6月</Radio.Button>
          <Radio.Button value="d">近1年</Radio.Button>
        </Radio.Group>
      </div>
    )
  }
}

export default TheRadio