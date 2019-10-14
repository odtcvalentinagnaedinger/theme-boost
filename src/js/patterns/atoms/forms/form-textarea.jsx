import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class AtomsFormTextarea extends Component {
    render () {
        return (<div>
            <textarea name='textarea' id='textarea' />
        </div>)
    }
}

AtomsFormTextarea.propTypes = {
}

AtomsFormTextarea.defaultProps = {
}

export default ComponentInjector.return('AtomsFormTextarea', AtomsFormTextarea)
