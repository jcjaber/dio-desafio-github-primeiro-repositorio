import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      cup: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        cup: 'Cinzano'
      })
    }, 3000)
  }
  alterCup = () => {
    this.setState({
      cup: 'vinho'
    })
  }

  render() {
    const { clock, cup } = this.state

    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterCup()}>{cup}</button>
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement);

