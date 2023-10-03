import React, { Component } from 'react';
import { Controls } from './controls.jsx';
class MyCounter extends Component {
  // дефолтні знач якщо нічого не передати
  static defaultProps = {
    initialValue1: 0, //приймає значення по дефолту з App.jsx
  };

  state = {
    value1: this.props.initialValue1,
    value2: this.props.initialValue2,
    count: 0,
  };
  handCount = () => {
    this.setState({
      count: this.state.value1 + this.state.value2,
    });
  };
  handleIncrem = () => {
    //public property публічна властивість
    console.log('CLICK Up');
    // якщо перезаписати старе невраховуючи його
    //     this.setState({
    //       value: 15,
    //     });
    // якщо треба змінити старе враховуючи його заначення НЕЯвне повернення треба return
    // this.setState(prevState => {
    //   return {
    //     value: prevState.value + 1,
    //   };
    // });
    //якщо треба змінити старе враховуючи його заначення
    this.setState(prev => ({
      // Явне повернення без return
      value1: prev.value1 + 1,
    }));
  };
  handleDecrem = () => {
    //public property
    console.log('CLIK Down');
    this.setState(prevState => ({
      //передаємо фу, яка повертає обьєкт
      value2: prevState.value2 + 1,
    }));
  };
  render() {
    const { value1, value2, count } = this.state; //деструктуризація value з обькту this.state
    return (
      <div>
        <span>{value1}</span>
        <span>{value2}</span>
        <p>{count}</p>
        <Controls
          onIncrement={this.handleIncrem}
          onDecrement={this.handleDecrem}
        />
      </div>
    );
  }
}
export default MyCounter;
