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
        <div className="card">温度：</div>
        <div className="card">湿度：</div>
        <div className="card">风向：</div>
        <div className="card">风力：</div>
        <div className="card">PM2.5浓度：</div>
        <div className="card">噪音：</div>
      </div>
    )
  }
}

export default SingleOverview