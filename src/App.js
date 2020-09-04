import React, { Component } from "react";
import './App.css';

import Intro from "./Intro.js";
import Gallery from "./Gallery.js";
import Ideas from "./Ideas.js";

const breakpoints = {
  s: 640,
  m: 1007,
  l:1400
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      windowWidth: window.innerWidth,
    windowSize: ""
    };
  }



  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
    console.log(this.state.windowWidth);
    this.checkwindowsize();
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.checkwindowsize();
  }

 checkwindowsize = (e) => {
    if (this.state.windowWidth<640){
      this.setState({ windowSize: "S" });
    }else if(this.state.windowWidth<1007){
      this.setState({ windowSize: "M" });
    }else if(this.state.windowWidth<1440){
      this.setState({ windowSize: "L" });
    }else{
      this.setState({ windowSize: "XL" });
    }
    console.log(this.state.windowSize);
  }


  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }
  render() {
    return (
      <div className="App">
        <div className="wide-left" >
          <div className="half-box-style" >
            <Intro />
            {/* {this.state.windowSize=="S"|this.state.windowSize=="M" && <Gallery />} */}
            {
              this.state.windowSize=="S"|this.state.windowSize=="M"
              ? <Gallery />
              : null
            }
            <Ideas />
          </div>
        </div>
                    {
              this.state.windowSize=="L"|this.state.windowSize=="XL"
              ? <div className="wide-right" ><div className="half-box-style" ><Gallery /></div></div>
              : null
            }
      </div>
    );
  }
}


export default App;
