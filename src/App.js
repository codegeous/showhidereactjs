import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    constructor( props ){
        super( props )
        this.state = { show : true };
        
        this.toggleDiv = this.toggleDiv.bind(this)
    }
    
    toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div className="App-intro">
                <br />
                <button onClick={ this.toggleDiv }>Toggle div</button>
                <br /><br />
                { this.state.show && <Box /> }
            </div>
          </div>
        );
    }
}

class Box extends Component{
    render(){
        return(
            <div>This is a div</div>
        )
    }
}

export default App;
