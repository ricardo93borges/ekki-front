/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { ButtonsWrapper, PrevButton, NextButton } from "./style";

class Paginator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            page: 1,
            previousDisabled: true,
            nextDisabled: false,
        }
    }

    prev = async () => {
        let page = this.state.page
        this.setState({ page: page - 1 }, async () => {
            this.props.fetch(page - 1)

            if (this.state.page === 1) {
                this.setState({ previousDisabled: true, nextDisabled: false })
            } else {
                this.setState({ previousDisabled: false })
            }
        })
    }

    next = () => {
        let page = this.state.page
        this.setState({ page: page + 1 }, async () => {
            const total = await this.props.fetch(page + 1)
            if (total < this.props.perPage) {
                this.setState({ nextDisabled: true, previousDisabled: false })
            } else {
                this.setState({ nextDisabled: false })
            }
        })
    }

    render() {
        return (
            <section className="row">
                <ButtonsWrapper className="column">
                    <PrevButton disabled={this.state.previousDisabled} onClick={() => this.prev()}>Anterior</PrevButton>
                    <NextButton disabled={this.state.nextDisabled} onClick={() => this.next()}>Próximo</NextButton>
                </ButtonsWrapper>
            </section>
        );
    }
}

Paginator.propTypes = {
    fetch: PropTypes.func,
    perPage: PropTypes.number
}

export default Paginator;
