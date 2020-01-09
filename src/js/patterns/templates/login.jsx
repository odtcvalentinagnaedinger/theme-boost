import React, { Component } from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'
import Button from '../atoms/buttons/button'

import PageHeader from '../organisms/base/header-page'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class Login extends Component {
    constructor (props) {
        super(props)

        this.state = {
            login_email: '',
            login_password: '',
        }
    }

    render () {
        return (
            <div className='o-container-small'>
                <PageHeader
                    title={<FormattedMessage id='account.login.welcomeBack' />}
                    className='u-hidden-medium-up'
                    handleClick={() => { app.getRouter().history.replace('/') }}
                />
                <div className='u-hidden-until-medium'>
                    <h1 className='c-title u-text-center'>
                        <FormattedMessage id='account.login.welcomeBack' />
                    </h1>
                </div>
                <div className='o-form-area o-distance-m'>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <label htmlFor='inp-mail' className='c-form-label'>
                            <FormattedMessage id='account.login.emailAddress' />
                        </label>
                        <input
                            type='email'
                            className='o-distance-s'
                            value={this.state.login_email}
                            onChange={(event) => {
                                this.setState({ login_email: event.target.value })
                            }}
                        />
                    </div>
                    <div className='o-form-area__column-6-6 o-form-area__new-row'>
                        <label htmlFor='inp-password' className='c-form-label'>
                            <FormattedMessage id='account.login.password' />
                        </label>
                        <input
                            type='password'
                            className='c-form-unit o-distance-s'
                            value={this.state.login_password}
                            onChange={(event) => {
                                this.setState({ login_password: event.target.value })
                            }}
                        />
                    </div>
                </div>
                <Button
                    type='primary'
                    size='boss'
                    className='o-distance-m'
                    disabled={!this.state.login_email || !this.state.login_password}
                    onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()

                        app.getLoader('context').login(this.state.login_email, this.state.login_password)
                    }}
                >
                    <FormattedMessage id='account.login.login' />
                </Button>
                <div className='c-divider c-divider--break o-distance-l' />
            </div>
        )
    }
}

Login.propTypes = {
}

Login.defaultProps = {
}

export default ComponentInjector.return('Login', Login)
