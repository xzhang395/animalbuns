import React, { Component } from "react";
import turtilla from "./img/turtilla.png";
import strawbeary from "./img/strawbeary.png";
import instantPoodle from "./img/instantPoodle.png";
import chocolateMoose from "./img/chocolateMoose.png";



const photo = [
    {
        src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    }
]

const modeldata = [{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1600036850320369/bQEOzFZZNJL/1SyntCG7cuQ/v1.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1600036850320369/bQEOzFZZNJL/28K_P4BboXT/v1.usdz",
    alt: "Chocolate Moose by Nika Zhang",
},{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1600040391985930/6EqeXINAJpe/7OrTFcGVzNM/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1600040391985930/6EqeXINAJpe/0GC9wHoPklZ/model.usdz",
    alt: "InstantPoodle by Nika Zhang",
},
{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1598844981775095/bunhq9A_kKB/bZcoPX4Qrbz/Turtilla.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1598844981775095/bunhq9A_kKB/b62zj0IX497/Turtilla.usdz",
    alt: "Tur-tilla by Nika Zhang",
},
{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1598833715801076/dRy_c-J8F5d/4FEDsdN6uEH/strabeary.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1598833715801076/dRy_c-J8F5d/5WfOfwOY5LH/strabeary.usdz",
    alt: "Straw-beary by Nika Zhang",
},
]

class Gallery extends Component {
    constructor(props) {

        super(props);
        this.state = {
            modeldata: {
                src: modeldata[0].src,
                iosSrc: modeldata[0].iosSrc,
                alt: modeldata[0].alt,
            }
        };
    }

    handleClick = (e) => {
        let parent = e.target.parentNode.parentNode;
        let MIndex = Array.prototype.indexOf.call(parent.children, e.target.parentNode);
        // console.log(e.target.parentNode.parentNode);
        // console.log(MIndex);
        this.setState({
            modeldata: {
                src: modeldata[MIndex].src,
                iosSrc: modeldata[MIndex].iosSrc,
                alt: modeldata[MIndex].alt,
            }
        })
    }

    render() {
        return (
            <div className="Gallery">
                <h2>Last week’s newborn:</h2>
                <div>
                    <model-viewer className="model" src={this.state.modeldata.src} interaction-policy="allow-when-focused" ios-src={this.state.modeldata.iosSrc} alt={this.state.modeldata.alt} background-color="#cc9a6c" camera-controls > </model-viewer>
                </div>
                <div className="app">
                    <ul className="hs full">
                     <li className="item" onClick={((e) => this.handleClick(e))}><img src={chocolateMoose} /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={instantPoodle} /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={turtilla} /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={strawbeary} /></li>
                        {/* <li className="item" ><img src={filler} /></li> */}
                    </ul>
                </div>
            </div>

        );
    }
}

export default Gallery;
