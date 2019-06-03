import React, { Component, Fragment } from "react"
import { render } from "react-dom"
import PropTypes from 'prop-types'
class Button extends Component {
    render() {
        return <a onClick={this.props.onClick} href="#">{this.props.children}</a>
    }
}

Button.defaultProps = {
    children: "Salvar"
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
}
class App extends Component {

    handleClick() {
        alert('Handle Click')
    }

    render() {
        return (
            <Fragment>
                <h1>RocketSeat </h1>
                <Button onClick={() => { alert('teste') }}></Button>
                <br />
                <Button onClick={this.handleClick}>Enviar</Button>
            </Fragment>
        )
    }
}

render(<App />, document.getElementById("app"))