/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Tab } from "./style";

class Tabs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            active: 0
        }
    }

    render() {
        return (
            <>
                <div className="row" style={{ marginTop: '30px', marginBottom: '20px' }}>
                    <Tab onClick={() => this.setState({ active: 0 })} active={this.state.active === 0 ? true : false}>
                        Transações
                    </Tab>
                    <Tab onClick={() => this.setState({ active: 1 })} active={this.state.active === 1 ? true : false}>
                        Contatos
                    </Tab>
                </div>
                {this.props.children[this.state.active]}
            </>
        );
    }
}

export default Tabs;
