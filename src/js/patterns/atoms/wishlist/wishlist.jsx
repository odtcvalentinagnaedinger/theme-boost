import React, { Component } from 'react'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class MoleculesWishlist extends Component {
    render () {
        return (<div>
            <div className='o-counter'>
                <svg className='c-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>love-it-alternate</title><path d='M23.305,5.075A6.583,6.583,0,0,0,12.858,3.367L12,4.148l-.828-.754A6.525,6.525,0,0,0,5.485,1.587,6.476,6.476,0,0,0,.7,5.075,6.4,6.4,0,0,0,1.91,12.544L11.283,22.2a1,1,0,0,0,1.434,0l9.359-9.638A6.416,6.416,0,0,0,23.305,5.075Zm-2.648,6.076-8.3,8.545a.5.5,0,0,1-.717,0l-8.313-8.56A4.419,4.419,0,0,1,2.48,5.98,4.494,4.494,0,0,1,5.806,3.562,4.564,4.564,0,0,1,9.8,4.845l1.53,1.4a1,1,0,0,0,1.347,0l1.561-1.423A4.546,4.546,0,0,1,18.2,3.562,4.492,4.492,0,0,1,21.521,5.98,4.427,4.427,0,0,1,20.657,11.151Z' /></svg>
                <span className='c-bubble o-counter__spot'>2</span>
            </div>
        </div>)
    }
}

MoleculesWishlist.propTypes = {
}

MoleculesWishlist.defaultProps = {
}

export default ComponentInjector.return('MoleculesWishlist', MoleculesWishlist)