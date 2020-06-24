import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import app from '@frontastic/catwalk/src/js/app/app'
import Message from '@frontastic/catwalk/src/js/app/message'
import DefaultLoader from 'Molecules/Loaders/DefaultLoader/index'

/* Standard confirmation tasitc */
class AccountConfirmTastic extends Component {
    constructor (props) {
        super(props)

        this.state = {
            confirm: null,
        }
    }

    componentDidMount () {
        if (!this.props.token) {
            return
        }

        app.api.request(
            'POST',
            'Frontastic.AccountApi.Api.confirm',
            { token: this.props.token, ownErrorHandler: true },
            {},
            (json) => {
                app.getLoader('context').notifyUser(
                    <Message
                        code='account.message.confirmSuccess'
                        message='Account confirmation successfull.'
                    />,
                    'success'
                )
                app.getLoader('context').refresh()
                app.getRouter().replace('Frontastic.Frontend.Master.Account.profile')
            },
            (json) => {
                app.getLoader('context').notifyUser(
                    <Message
                        code='account.message.confirmError'
                        message='Could not confirm account'
                    />,
                    'error'
                )
                app.getRouter().history.replace('/')
            }
        )
    }

    render () {
        return !this.state.confirm ? <DefaultLoader /> : null
    }
}

AccountConfirmTastic.propTypes = {
    token: PropTypes.string,
}

AccountConfirmTastic.defaultProps = {
}

export default connect(
    (globalState, props) => {
        return {
            ...props,
            token: globalState.app.route.get('token', null),
        }
    }
)(AccountConfirmTastic)