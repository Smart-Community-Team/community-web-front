import { Slider, InputNumber, Row, Col } from 'antd';
import React from 'react';

class TheSlider extends React.Component {
  state = {
    inputValue: this.props.defaultValue,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
    this.props.handleChange(value)
  };

  auto = ()=>{
    setInterval(()=>{
      const newValue = (this.state.inputValue)%24+1
      this.setState({
        inputValue: newValue,
      });
      this.props.handleChange(newValue)
    },1000)
  }

  componentDidMount(){
    this.auto()
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={24}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={24}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

export default TheSlider