import React, { Component } from "react";
import turtilla from "./img/turtilla.png";
import strawbeary from "./img/strawbeary.png";
import instantPoodle from "./img/instantPoodle.png";
import chocolateMoose from "./img/chocolateMoose.png";
import toadfu from "./img/toadfu.png";
import beagel from "./img/beagel.png";
import PotatoChimps from "./img/PotatoChimps.png";
import Pawpsicle from "./img/Pawpsicle.png";
import Susheep from "./img/susheep.png";
import Piethon from "./img/piethon.png";
import Camelapple from "./img/camelapple.png";
import Butterfly from "./img/butterfly.png";
import Miceballs from "./img/miceballs.png";

const modeldata = [{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1605502572745904/5I8xhxI5IKs/5Vl1QrA0cYW/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1605502572745904/5I8xhxI5IKs/eXwUxc2kvpH/model.usdz",
    alt: "Mice balls by Nika Zhang",
    name: "Mice Balls"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1604872389088504/59wVZJLz8l9/eaO3aQFlkIt/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1604872389088504/59wVZJLz8l9/aregHxa4rg8/model.usdz",
    alt: "Butter-fly by Nika Zhang",
    name: "Butter-fly"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1604041551510483/bPc4gs7UyZV/ez30L0gf32x/model.gltf",
    alt: "Ca(ra)mel Apple by Nika Zhang",
    name: "Ca(ra)mel Apple"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1603691611062066/7sr6e4p0Rub/eZ2A3KmGYmM/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1603691611062066/7sr6e4p0Rub/210zKM3sXp7/model.usdz",
    alt: "Pie-thon by Nika Zhang",
    name: "Pie-thon"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1603085388966524/3mhagMGj6iO/bFIaPPECVpY/model.gltf",
    alt: "Su-sheep by Nika Zhang",
    name: "Su-sheep"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1602392768424064/4L1gZu8Z02g/4tIo2SjUBao/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1602392768424064/4L1gZu8Z02g/bkF1YJOXubq/model.usdz",
    alt: "Paw-psicle by Nika Zhang",
    name: "Paw-psicle"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1601872434785501/dUfzjXM1YHR/5mTGFZ_Y9cB/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1601872434785501/dUfzjXM1YHR/7FVxkD35X68/model.usdz",
    alt: "Potato Chimps by Nika Zhang",
    name: "Potato Chimps"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1601254101313148/5XbZ0QxOJZI/28Bpt_IXXCn/model.gltf",
    alt: "Beagel by Nika Zhang",
    name: "Beagel"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1600496019723460/bY627s0ODr2/5BVJkO2HJgs/ffds.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1600496019723460/bY627s0ODr2/9Eg8yKLc4za/ffds.usdz",
    alt: "Toadfu by Nika Zhang",
    name: "Toad-fu"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1600036850320369/bQEOzFZZNJL/1SyntCG7cuQ/v1.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1600036850320369/bQEOzFZZNJL/28K_P4BboXT/v1.usdz",
    alt: "Chocolate Moose by Nika Zhang",
    name: "Chocolate Moose"
}, {
    src: "https://poly.googleusercontent.com/downloads/c/fp/1600040391985930/6EqeXINAJpe/7OrTFcGVzNM/model.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1600040391985930/6EqeXINAJpe/0GC9wHoPklZ/model.usdz",
    alt: "Instant Poodle by Nika Zhang",
    name: "Instant Poodle"
},
{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1598844981775095/bunhq9A_kKB/bZcoPX4Qrbz/Turtilla.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1598844981775095/bunhq9A_kKB/b62zj0IX497/Turtilla.usdz",
    alt: "Tur-tilla by Nika Zhang",
    name: "Tur-tilla"
},
{
    src: "https://poly.googleusercontent.com/downloads/c/fp/1598833715801076/dRy_c-J8F5d/4FEDsdN6uEH/strabeary.gltf",
    iosSrc: "https://poly.googleusercontent.com/downloads/c/fp/1598833715801076/dRy_c-J8F5d/5WfOfwOY5LH/strabeary.usdz",
    alt: "Straw-beary by Nika Zhang",
    name: "Straw-beary"
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
            },
            selected: modeldata[0].name,
        };
    }

    handleClick = (e) => {
        let parent = e.target.parentNode.parentNode;
        let MIndex = Array.prototype.indexOf.call(parent.children, e.target.parentNode);
        this.setState({
            modeldata: {
                src: modeldata[MIndex].src,
                iosSrc: modeldata[MIndex].iosSrc,
                alt: modeldata[MIndex].alt,
            },
            selected: modeldata[MIndex].name
        })
    }

    render() {
        return (
            <div className="Gallery">
                <h2>{this.state.selected}</h2>
                <div>
                    <model-viewer className="model" src={this.state.modeldata.src} interaction-policy="allow-when-focused" ios-src={this.state.modeldata.iosSrc} alt={this.state.modeldata.alt} background-color="#cc9a6c" camera-controls > </model-viewer>
                </div>
                <div className="app">
                    <ul className="hs full">
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={Miceballs} alt="Mice balls" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={Butterfly} alt="Butter-fly" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={Camelapple} alt="Ca(ra)mel Apple)" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={Piethon} alt="Pie-thon" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={Susheep} alt="Su-sheep" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={Pawpsicle} alt="Paw-psicle" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={PotatoChimps} alt="Potato Chimps" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={beagel} alt="Beagel" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={toadfu} alt="toad-fu" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={chocolateMoose} alt="Chocolate Moose" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={instantPoodle} alt="Instant Poodle" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={turtilla} alt="Tur-tilla" /></li>
                        <li className="item" onClick={((e) => this.handleClick(e))}><img src={strawbeary} alt="Straw-beary" /></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Gallery;
