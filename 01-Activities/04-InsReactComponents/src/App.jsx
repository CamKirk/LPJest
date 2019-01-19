import React, { Component } from 'react';
import UnpopularOpinions from './UnpopularOpinions';

class App extends Component {
  state = {
    anyChange:false
  }

  handleChange = () => {
    this.setState({
      anyChange: !this.state.anyChange
    });
  }

  render() {
    return (
      <div className="App">

        <UnpopularOpinions 
          text={`Soccer is more interesting than 
            ${this.state.anyChange ? "Football" : "Hockey"}
          `}
          clickHandler={this.handleChange}
        />
       
      </div>
    );
  }
}

export default App;
