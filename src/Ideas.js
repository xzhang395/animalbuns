import React, { Component } from "react";
import Tabs from "./Tabs.js";


class Ideas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0
        };
        this.onTabChange = this.onTabChange.bind(this);
    }
    onTabChange(e) {
        const { activeTabIndex } = this.state;
        const index = parseInt(e.target.getAttribute('data-index'));

        if (activeTabIndex !== index) {
            this.setState({ activeTabIndex: index })
        }
    }
    render() {
        // const { activeTabIndex } = this.state;
        // const tabs = ['Current Quarter', 'Next Quarter', 'Further Out', 'All'];

        return (
            <div className="Ideas">
                <div className="Rules">
                    <h2>Rules:</h2>
                    <ul>
                        <li>I’ll make 1 thing / week </li>
                        <li>Add ideas below and get credits for it</li>
                        <li>Heart the ideas you love and I’ll make them first!</li>
                    </ul>
                </div>
                <div className="WIP">
                    <h2>This week WIP:</h2>
                    <span className="highlights">Strawbeary</span>
                </div>
                <div className="Inputs">
                    <h2>Your pun:</h2>
                    <div className="InputBoxes">
                        <input className="InputBox" type="text" placeholder="Food Animal name" />
                        <input className="InputBox" type="text" placeholder="Ur Ins/Twitter handle(optional)" />
                        <button className="AddBttn">Add</button>
                    </div>
                </div>
                <div className="Tables">
                    <Tabs>
                        <Tab label="To-dos">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Credit to</th>
                                            <th>Vote</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Strawbeary</td>
                                            <td>N/A</td>
                                            <td>2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                        <Tab label="Done">
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Birthday</th>
                                            <th>Name</th>
                                            <th>Credit to</th>
                                            <th>Votes</th>
                                        </tr>
                                        <tr>
                                            <td>2/8/20</td>
                                            <td>Instant Poodle</td>
                                            <td>N/A</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}


const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default Ideas;
