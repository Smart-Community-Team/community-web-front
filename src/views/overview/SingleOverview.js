import React from "react"
import './style.less'

class SingleOverview extends React.Component {
  constructor(props){
    super(props)
    this.chart = React.createRef();
  }
  render() {
    return (
      <div className="single-overview">
        <div>当前温度：</div>
        <div>当前湿度：</div>
        <div>当前风向：</div>
        <div>当前风力：</div>
        <div>当前PM2.5浓度：</div>
        <div>当前噪音：</div>
      </div>
    )
  }
}

export default SingleOverview