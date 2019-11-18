import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class AtomsTopic extends Component {
    render () {
        return (<div>
            <p className='c-topic'>Exklusive Rabatte</p>
        </div>)
    }
}

AtomsTopic.propTypes = {
}

AtomsTopic.defaultProps = {
}

export default ComponentInjector.return('AtomsTopic', AtomsTopic)