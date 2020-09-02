import React, { Component } from "react";
import firebase from "./firebase.js";
import Tabs from "./Tabs.js";
import { ReactComponent as Like } from './img/like.svg';
import { ReactComponent as Liked } from './img/liked.svg';

class Ideas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            name: "",
            credit: "",
            done: false,
            todo: [
                {
                    key: '',
                    name: '',
                    credit: '',
                    vote: 0,
                    done: false,
                    liked: false
                }
            ],
            done: [
                {
                    key: '',
                    name: '',
                    credit: '',
                    vote: 0,
                    done: false,
                    liked: false
                }
            ]
        };
        // this.onTabChange = this.onTabChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    getUserData = () => {
        var ref = firebase.database().ref('ideas/');
        ref.on(
            "value",
            snapshot => {
                let data = snapshot.val();
                console.log(data);

                let todos = [];
                let done = [];

                for (let n in data) {
                    if (!data[n].done) {
                        todos.push({
                            key: n,
                            name: data[n].name,
                            credit: data[n].credit,
                            vote: data[n].vote,
                            done: data[n].done,
                            date: data[n].date,
                            liked: false
                        })
                    }
                    else {
                        done.push({
                            key: n,
                            name: data[n].name,
                            credit: data[n].credit,
                            vote: data[n].vote,
                            done: data[n].done,
                            date: data[n].date,
                            liked: false
                        })
                    }

                    console.log(todos);
                    // console.log(done);
                }
                this.setState({
                    todo: todos,
                    done: done
                })
                // console.log(this.state.todo);
                // console.log(this.state.done);
            },
            function (error) {
                console.log("Error: " + error.code);
            }
        );
    };
    componentDidMount() {
        this.getUserData();
    }

    writeUserData = () => {
        console.log("add");
        const data = firebase.database().ref('ideas/');
        data.push({
            name: this.state.name,
            credit: this.state.credit,
            vote: 0,
            done: false,
            date: 'N/A'
        });
    };
    like = (e) => {
        let element = e.target;
        let thiskey = element.dataset.key;
        firebase.database().ref('ideas/' + thiskey).once('value').then(function(snapshot) {
         let currentvote = snapshot.val().vote;
         currentvote=currentvote+1;
        let updates = {};
        updates['ideas/' + thiskey + '/' + 'vote'] = currentvote;
        return firebase.database().ref().update(updates);

          })
    };

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
            [evt.target.name]: value
        });
        // console.log(this.state.name);
    }
    onTabChange(e) {
        const { activeTabIndex } = this.state;
        const index = parseInt(e.target.getAttribute('data-index'));

        if (activeTabIndex !== index) {
            this.setState({ activeTabIndex: index })
        }
    }

    renderTodoTable() {
        return this.state.todo.map((student, index) => {
            const { key, name, credit, vote } = student; //destructuring
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{credit}</td>
                    <td><div data-like="false" data-key={key} className="votebttn" onClick={((e) => this.like(e))}>
                        <Like className="Likebutton" />
                        {vote}
                    </div></td>
                </tr>
            );
        });
    }
    renderDoneTable() {
        return this.state.done.map((student, index) => {
            const { key, name, credit, vote, date } = student; //destructuring
            return (
                <tr key={index}>
                    <td>{date}</td>
                    <td>{name}</td>
                    <td>{credit}</td>
                    <td><div data-like="false" data-key={key} className="votebttn" onClick={((e) => this.like(e))}>
                        <Like className="Likebutton" />
                        {vote}
                    </div></td>
                </tr>
            );
        });
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
                        <input className="InputBox" onChange={this.handleChange} type="text" name="name" placeholder="Food Animal name" />
                        <input className="InputBox" onChange={this.handleChange} type="text" name="credit" placeholder="Ur Ins/Twitter handle(optional)" />
                        <button className="AddBttn" onClick={((e) => this.writeUserData(e))}>Add</button>
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
                                        {this.renderTodoTable()}
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
                                        {this.renderDoneTable()}
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
