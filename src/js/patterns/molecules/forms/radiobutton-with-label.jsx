import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Label from 'js/patterns/atoms/forms/form-label'
import Radiobutton from 'js/patterns/atoms/forms/form-radiobutton'

class RadiobuttonWithLabel extends Component {
    render () {
        return (
            <div className='o-block-short'>
                <div className='o-block-short__short-item'>
                    <Radiobutton id='inp-radiobutton-03' />
                </div>
                <div className='o-block-short__body'>
                    <Label className="c-form-label" htmlFor="inp-radiobutton-03" value={this.props.label} />
                </div>
            </div>
        )
    }
}

RadiobuttonWithLabel.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
}

RadiobuttonWithLabel.defaultProps = {
    id: undefined,
    name: '',
    className: 'c-form-unit__input',
    label: 'Radiobutton-Label',
}

export default ComponentInjector.return('RadiobuttonWithLabel', RadiobuttonWithLabel)
