import React, { Component } from "react";
// import { ReactComponent as Ins } from './img/ins.svg';
// import { ReactComponent as Twitter } from './img/twitter.svg';
import Ins from './img/ins.svg';
import Twitter from './img/twitter.svg';


class Intro extends Component {

    render() {
        return (
            <div className="Intro">
                <h1>Animal Buns</h1>
                <p>This is a website for bringing animal/food puns to life.</p>
                <div  className="scontainer">
                <a href="https://www.instagram.com/animalbuns/?hl=en" className="sblock"><img className="sicon" src={Ins} />@animalbuns</a>
                <a href="https://twitter.com/animalbuns" className="sblock"><img  className="sicon" src={Twitter} />@animalbuns</a>
                </div>
            </div>
        );
    }
}

export default Intro;
