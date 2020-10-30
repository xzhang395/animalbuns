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
                }
            ],
            done: [
                {
                    key: '',
                    name: '',
                    credit: '',
                    vote: 0,
                    done: false,
                }
            ],
            likes: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    getUserData = () => {
        var ref = firebase.database().ref('ideas/');
        ref.on(
            "value",
            snapshot => {
                let data = snapshot.val();
                // console.log(data);

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
                        })
                    }
                }
                // console.log(todos);
                done.sort(compareDate);

                todos.sort(compareEntry);
                // console.log(todos); 
                this.setState({
                    todo: todos,
                    done: done
                })
            },
            function (error) {
                console.log("Error: " + error.code);
            }
        );

    };



    componentDidMount() {
        this.getUserData();
        // console.log(this.props.size);
    }

    writeUserData = () => {
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
        let name = element.dataset.name;
        let currentlikes = this.state.likes;
        let liked = currentlikes.includes(name);
        // console.log(name);
        // console.log(liked);
        if (!liked) {
            currentlikes.push(name);
        } else {
            currentlikes.splice(currentlikes.indexOf(name), 1); // will return ['B'] and t is now equal to ['A', 'C', 'B']
        }
        this.setState({
            likes: currentlikes
        });
        liked = !liked;

        let thiskey = element.dataset.key;
        firebase.database().ref('ideas/' + thiskey).once('value').then(function (snapshot) {

            let currentvote = snapshot.val().vote;
            if (liked) {
                currentvote = currentvote + 1;
            }
            else {
                currentvote = currentvote - 1;
            }

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
                    {
                        this.props.size !== "S"
                            ? <td>{index + 1}</td>
                            : null
                    }

                    <td>{name}</td>
                    <td>{credit}</td>
                    <td><div data-name={name} data-index={index} data-key={key} data-liked="false" data-list="todo" className="votebttn" onClick={((e) => this.like(e))}>
                    {
                        this.state.likes.includes(name)
                            ? <Liked className="Likebutton liked" />
                            : <Like className="Likebutton" />
                    }
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
                    {
                        this.props.size !== "S"
                            ? <td>{date}</td>
                            : null
                    }

                    <td>{name}</td>
                    <td className="">{credit}</td>
                    <td><div data-name={name} data-like="false" data-key={key} data-list="done" className="votebttn" onClick={((e) => this.like(e))}>
                    {
                        this.state.likes.includes(name)
                            ? <Liked className="Likebutton liked" />
                            : <Like className="Likebutton" />                    }
                        {vote}
                    </div></td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="Ideas">
                <div className="Rules">
                    <h2>Rules:</h2>
                    <ul>
                        <li>New post every Sunday</li>
                        <li>Add your animal/food puns below</li>
                        <li>Heart the ideas you love and I’ll make them first!</li>
                    </ul>
                </div>
                <div className="WIP">
                    <h2>This week WIP:</h2>
                    <span className="highlights">crane-berry jam</span>
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
                                            {
                                                this.props.size !== "S"
                                                    ? <th className="row-index">No.</th>
                                                    : null
                                            }
                                            <th className="row-name">Name</th>
                                            <th className="row-credit">By</th>
                                            <th className="row-vote">Vote</th>
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
                                            {
                                                this.props.size !== "S"
                                                    ? <th className="row-date">Date</th>
                                                    : null
                                            }

                                            <th className="row-name">Name</th>
                                            <th className="row-credit">By</th>
                                            <th className="row-vote">Votes</th>
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
//compose data key
function compareEntry(a, b) {
    if (Number(a.vote) > Number(b.vote)) return -1;
    if (Number(b.vote) > Number(a.vote)) return 1;
    return 0;
}
function compareDate(a, b) {
    let adate = new Date(a.date);
    let bdate = new Date(b.date);
    if (adate > bdate) return -1;
    if (bdate > adate) return 1;
    return 0;
}
export default Ideas;
