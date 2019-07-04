/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { TabsWrapper, Tab } from "./style";

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
                <TabsWrapper>
                    <Tab onClick={() => this.setState({ active: 0 })} active={this.state.active === 0 ? true : false}>
                        Transações
                    </Tab>
                    <Tab onClick={() => this.setState({ active: 1 })} active={this.state.active === 1 ? true : false}>
                        Contatos
                    </Tab>
                </TabsWrapper>
                {this.props.children[this.state.active]}
            </>
        );
    }
}

export default Tabs;
