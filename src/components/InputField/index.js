import React, { Component } from 'react';
import './styles.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input type="text" value={this.state.value} className="InputField" />
    );
  }
}

export default InputField;
