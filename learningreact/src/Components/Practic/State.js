import React, { Component } from 'react'

export default class State extends Component {
    constructor() {
        super();
        this.state = {
            text: 'What are you doing',
            num: 1
        }
    }
    changeText = () => {
        this.setState({ text: 'I am learning React' })
    }
    addNum = () => {
        this.setState({ num: this.state.num + 1 })
    }
    subNum = () => {
        this.setState({ num: this.state.num - 1 })
    }
    render() {
        return (
            <div>
                <h2>{this.state.text}</h2>
                <button onClick={() => this.changeText()}>Click me</button>
                <br />
                <br />
                <br />
                <h2>{this.state.num}</h2>
                <button onClick={this.addNum}>ADD</button>
                <button onClick={this.subNum}>Sub</button>
            </div>
        )
    }
}