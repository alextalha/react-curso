import React, { Component, Fragment } from "react"
import { render } from "react-dom"

class Button extends Component {
    render() {
        return <a onClick={this.props.onClick} href="#">{this.props.title}</a>
    }
}

class App extends Component {

    handleClick() {
        alert('Handle Click')
    }

    render() {
        return (
            <Fragment>
                <h1>RocketSeat </h1>
                <Button onClick={this.handleClick} title="Enviar" />
            </Fragment>
        )
    }
}

render(<App />, document.getElementById("app"))