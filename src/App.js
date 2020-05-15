import React, { Component } from 'react';

import './App.css';
import Cart from './Cart';
import Features from './Features'
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  total = () => Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,0);

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features 
              updateFeature={this.updateFeature}
              featureKeys={Object.keys(this.props.features)}
              featuresRoot={this.props.features}
              selected={this.state.selected}
              dollarFormat={USCurrencyFormat}
            />
          </form>
          <Cart
            dollarFormat={USCurrencyFormat}
            selectedOptions={this.state.selected}
            keys={Object.keys(this.state.selected)}
            calculate={this.total} 
          />
        </main>
      </div>
    );
  }
}

export default App;
