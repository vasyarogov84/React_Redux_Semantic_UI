import React, { Component } from 'react';
import { connect } from 'react-redux';



class Game extends Component {
  state = {
    clicks: 0,
    results: [],
    start_time: 0,
    curent_time: 0,
    best_time: 0
  }
  componentDidMount() {
    this.setState({ start_time: new Date().getTime() })
  }

  setResult = () => {
    let time_when_item_been_clicked = new Date().getTime();
    let start = this.state.start_time;
    let sum = this.state.results.length ? this.state.results.reduce((a, b) => a + b) : 0;
    
    let diff = time_when_item_been_clicked - sum - start;
    let best_time = this.state.results.sort((a,b) => a - b);
    console.log(best_time);

    this.setState({
      clicks: this.state.clicks + 1,
      results: [...this.state.results, diff],
      curent_time: diff,
      best_time: best_time[0]
    })
  }
  render() {
    const getSize = () => {
      return Math.floor(Math.random() * 30 + 30)
    }
    const getColor = () => {
      const symbols = "ABCDEF1234567890";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)]
      }
      return color;
    }

    let style = {
      width: getSize(),
      height: getSize(),
      backgroundColor: getColor(),
      marginTop: getSize() + Math.floor(Math.random() * 600),
      marginLeft: getSize() + Math.floor(Math.random() * 600),
      borderRadius: getSize() - 10
    }
    return (
      <div>
        <div className="ui horizontal segments">
          <h3  style={{ color: 'red' }} className="ui segment">
          {this.props.curent_user.first_name} {this.props.curent_user.last_name}
          </h3>
          <h3 className="ui segment">
            Best Time: <span style={{ color: 'green' }}>{(this.state.best_time/ 1000).toFixed(2)}  (seconds)</span>
          </h3>
          <h3 className="ui segment">
          Time: <span style={{ color: 'red' }}>{(this.state.curent_time / 1000).toFixed(2)} (seconds)</span>
          </h3>
        </div>
        <div style={style} onClick={this.setResult}></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    curent_user: state.users[state.users.length - 1]
  }
}

export default connect(mapStateToProps)(Game);
